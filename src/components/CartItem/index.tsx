import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CarItemProps from '../../types/CarItemProps';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamListProps';
import { useUsers } from '../../context/useUsersContext';

type CarItemNavigationProp = StackNavigationProp<RootStackParamList, 'EditCar'>;

const CarItem: FC<CarItemProps> = ({ car, onDelete }) => {
  const navigation = useNavigation<CarItemNavigationProp>();
  const { users } = useUsers();

  const daysLeft = car.endDate
    ? Math.floor((new Date(car.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : '-';


  const handleEdit = () => {
    navigation.navigate('EditCar', { car });
  };

  const handleViewCarDetail = () => {
    navigation.navigate('CarDetail', { car });
  };

  return (
    <TouchableOpacity onPress={handleViewCarDetail} style={styles.carItem}>
      <Image source={{ uri: car?.image }} style={styles.carImage} />
      <View style={styles.carInfo}>
        <Text>Name: {car.name}</Text>
        <Text>Model: {car.model}</Text>
        <Text>Assigned To: {users.find(user => user.id === car.assignedTo)?.name || 'Not Assigned'}</Text>
        <Text>Days Left: {daysLeft}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleEdit} style={styles.actionButton}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(car.id)} style={styles.actionButton}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;
