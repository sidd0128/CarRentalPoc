import React, {FC} from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import CarDetailProps from '../../types/CarDetailProps';



const CarDetail: FC<CarDetailProps> = ({ route }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{car.name}</Text>
      <Text>Model: {car.model}</Text>
      <Text>Currently Assigned To: {car.assignedTo || 'Not Assigned'}</Text>
      <Text>Total Rent Generated: {car.history.reduce((sum, item) => sum + item.rentalAmount, 0)}</Text>
      <Text>History:</Text>
      {car.history.map((item, index) => (
        <View key={index} style={styles.historyItem}>
          <Text>Assigned To: {item.assignedTo}</Text>
          <Text>Start Date: {item.startDate}</Text>
          <Text>End Date: {item.endDate}</Text>
          <Text>Rental Amount: {item.rentalAmount}</Text>
          <Text>Rental Deduction Date: {item.selectedDeductionDate}</Text>
          <Text>Status: {item.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default CarDetail;
