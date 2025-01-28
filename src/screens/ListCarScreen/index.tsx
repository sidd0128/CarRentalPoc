import React, { useState, FC, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import styles from './styles';
import { saveCars } from '../../helper/helper';
import CarItem from '../../components/CartItem';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamListProps';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomFlatList from '../../components/CustomFlatList';
import Dropdown from '../../components/CustomDropdown';
import { useUsers } from '../../context/useUsersContext';


type AddCarNavigationProp = StackNavigationProp<RootStackParamList, 'AddCar'>;

const CarList: FC = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'assigned' | 'unassigned'>('all');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<AddCarNavigationProp>();
  const {cars, setCars} = useUsers();

  const handleDelete = async (id: string) => {
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
    await saveCars(updatedCars);
  };

  const filteredCars = cars.filter(car => {
    // Check if the car matches the filter type (assigned, unassigned, all)
    const matchesFilter =
      filter === 'all' ||
      (filter === 'assigned' && car.assignedTo !== undefined && car.assignedTo !== '') ||
      (filter === 'unassigned' && (!car.assignedTo || car.assignedTo === ''));
    // Check if the car name matches the search query
    const matchesSearch = car.name.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by car name"
        value={query}
        onChangeText={setQuery}
      />

      <CustomFlatList
        data={filteredCars}
        renderItem={({ item }) => <CarItem car={item} onDelete={handleDelete} />}
        keyExtractor={(item) => item.id}
        emptyMessage="No cars found."
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addUserButton}
          onPress={() => navigation.navigate('UserList')}
        >
         <Icon name="person-circle-outline" size={50} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="filter" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('AddCar')}
        >
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Cars</Text>
            <Dropdown
                open={open}
                value={filter}
                items={[
                  { label: 'All', value: 'all' },
                  { label: 'Assigned', value: 'assigned' },
                  { label: 'Unassigned', value: 'unassigned' },
                ]}
                setOpen={setOpen}
                setValue={setFilter}
                onChangeValue={() => {}}
              />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CarList;
