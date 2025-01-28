import React, { useState, useEffect, FC } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import EditCarProps from '../../types/EditCarProps';
import { saveCars } from '../../helper/helper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamListProps';
import { Calendar } from 'react-native-calendars';
import { useUsers } from '../../context/useUsersContext';
import createUpdatedCar from '../../helper/editCarHelper';
import Dropdown from '../../components/CustomDropdown';

type CarEditNavigationProp = StackNavigationProp<RootStackParamList, 'EditCar'>;

const EditCar: FC<EditCarProps> = ({ route }) => {
  const { car } = route.params;
  const { users, cars, setCars } = useUsers();
  const navigation = useNavigation<CarEditNavigationProp>();

  const [assignedTo, setAssignedTo] = useState<string>(car?.assignedTo || '');
  const [drivingLicense, setDrivingLicense] = useState<string>(car?.drivingLicense || '');
  const [rentalAmount, setRentalAmount] = useState<string>(car?.history?.[0]?.rentalAmount?.toString() || '');
  const [selectedRentalDate, setSelectedRentalDate] = useState<string>(car?.endDate || new Date().toISOString().split('T')[0]);
  const [rentalDuration, setRentalDuration] = useState<number | undefined>(undefined);
  const [selectedDeductionDate, setSelectedDeductionDate] = useState<string>(car?.history?.[0]?.selectedDeductionDate || '');
  const [fineAmount, setFineAmount] = useState<string>('');
  const [paidStatus, setPaidStatus] = useState<boolean>(false);

  const [calendarVisibleRental, setCalendarVisibleRental] = useState(false);
  const [calendarVisibleDeduction, setCalendarVisibleDeduction] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isCarAssigned = !!car?.assignedTo;

  useEffect(() => {
    if (car?.endDate) {
      setRentalDuration(calculateRentalDuration(car.endDate));
    }
  }, [car]);

  const calculateRentalDuration = (selectedDate: string): number => {
    const startDate = new Date();
    const endDate = new Date(selectedDate);
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  };

  const updateCarArray = async () => {
    try {
      const updatedCar = createUpdatedCar(
        car,
        assignedTo,
        drivingLicense,
        selectedRentalDate,
        rentalAmount,
        selectedDeductionDate,
        fineAmount,
        paidStatus
      );
      const updatedCars = cars.map(existingCar =>
        existingCar.id === updatedCar.id ? updatedCar : existingCar
      );
      setCars(updatedCars);
      await saveCars(updatedCars);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save car details.');
    }
  };

  const handleSave = () => {
    if (!assignedTo || !drivingLicense || !selectedRentalDate || !rentalAmount || !selectedDeductionDate) {
      Alert.alert('Error', 'All fields are mandatory.');
      return;
    }
    updateCarArray();
  };

  const handleDropdownChange = (value: string | null) => {
    if (value) {
      const selectedUser = users.find(user => user.id === value);
      setDrivingLicense(selectedUser?.drivingLicense || '');
    }
  };

  const renderUserDropdown = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.heading}>Select Assignee:</Text>
      <Dropdown
        items={users.map(user => ({ label: user.name, value: user.id }))}
        value={assignedTo}
        setValue={setAssignedTo}
        placeholder="Select Assignee"
        open={dropdownOpen}
        setOpen={setDropdownOpen}
        onChangeValue={handleDropdownChange}
        disabled={isCarAssigned}
        containerStyle={styles.input}
        dropdownStyle={styles.dropdown}
      />
      <TouchableOpacity style={styles.addUserButton} onPress={() => navigation.navigate('UserList')}>
        <Text style={styles.addUserText}>Add User</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCalendar = (visible: boolean, onDateSelect: (date: string) => void, selectedDate: string, calendarType: 'rental' | 'deduction') => {
    const minDate = new Date().toISOString().split('T')[0];
    const maxDate = calendarType === 'deduction' && selectedRentalDate ? selectedRentalDate : undefined;
    return (
      visible && (
        <Calendar
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#00BFFF' },
          }}
          onDayPress={(day) => {
            onDateSelect(day.dateString);
            if (calendarType === 'rental') {
              setRentalDuration(calculateRentalDuration(day.dateString));
              setCalendarVisibleRental(false);
            } else {
              setCalendarVisibleDeduction(false);
            }
          }}
          minDate={minDate}
          maxDate={calendarType === 'deduction' ? maxDate : undefined}
          disableAllTouchEventsForDisabledDays
        />
      )
    );
  };

  const openCalendar = (calendarType: 'rental' | 'deduction') => {
    if (!isCarAssigned) {
      if (calendarType === 'rental') {
        setCalendarVisibleRental(!calendarVisibleRental);
      } else {
        setCalendarVisibleDeduction(!calendarVisibleDeduction);
      }
    }
  };

  const resetCarDetails = () => {
    setAssignedTo('');
    setDrivingLicense('');
    setPaidStatus(false);
    setRentalAmount('0.00');
    setSelectedRentalDate(new Date().toISOString().split('T')[0]);
    setSelectedDeductionDate('');
    setFineAmount('');
  };

  const handleUnassign = async () => {
    resetCarDetails();
    const updatedCar = createUpdatedCar(
      car,
      '', // cleared assignedTo
      '', // cleared drivingLicense
      new Date().toISOString().split('T')[0], // new rental end date (today)
      '0.00', // rentalAmount reset
      '', // cleared rentDeductionDate
      '', // cleared fineAmount
      false // paidStatus reset
    );
    const updatedCars = cars.map(existingCar =>
      existingCar.id === updatedCar.id ? updatedCar : existingCar
    );
    setCars(updatedCars);
    try {
      await saveCars(updatedCars);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save car details.');
    }
  };

  return (
    <View style={styles.container}>
      {renderUserDropdown()}

      <TextInput
        style={styles.input}
        placeholder="Driving License"
        value={drivingLicense}
        editable={false}
      />

      <Text style={styles.heading}>Rental Duration (Pick End Date):</Text>
      <TouchableOpacity style={styles.datePickerButton} onPress={() => openCalendar('rental')}>
        <Text style={styles.datePickerButtonText}>
          {selectedRentalDate ? `Selected Date: ${selectedRentalDate}` : 'Pick End Date'}
        </Text>
      </TouchableOpacity>

      {renderCalendar(calendarVisibleRental, setSelectedRentalDate, selectedRentalDate, 'rental')}

      {rentalDuration && (
        <Text style={styles.helperText}>Rental duration: {rentalDuration} days</Text>
      )}

      <Text style={styles.heading}>Rent Deduction Date:</Text>
      <TouchableOpacity style={styles.datePickerButton} onPress={() => openCalendar('deduction')}>
        <Text style={styles.datePickerButtonText}>
          {selectedDeductionDate ? `Selected Date: ${selectedDeductionDate}` : 'Pick Deduction Date'}
        </Text>
      </TouchableOpacity>

      {renderCalendar(calendarVisibleDeduction, setSelectedDeductionDate, selectedDeductionDate, 'deduction')}

      <Text style={styles.heading}>Fine Amount (if any):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Fine Amount"
        value={fineAmount}
        onChangeText={setFineAmount}
        keyboardType="numeric"
        editable={!isCarAssigned}
      />

      <Text style={styles.heading}>Rental Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Rental Amount"
        value={rentalAmount}
        keyboardType="numeric"
        onChangeText={setRentalAmount}
        editable={!isCarAssigned}
      />

      {selectedDeductionDate && new Date(selectedDeductionDate) <= new Date() && (
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setPaidStatus(!paidStatus)}>
            <Text style={styles.checkboxText}>{paidStatus ? 'Paid' : 'Unpaid'}</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={isCarAssigned}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {isCarAssigned && (
        <TouchableOpacity style={styles.unassignButton} onPress={handleUnassign}>
          <Text style={styles.unassignButtonText}>Unassign</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EditCar;
