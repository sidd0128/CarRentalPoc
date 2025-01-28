import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../types/UserProps';

export interface Car {
  id: string;
  name: string;
  [key: string]: any;
}


export const loadCars = async (): Promise<Car[]> => {
  try {
    const data = await AsyncStorage.getItem('cars');
    return data ? JSON.parse(data) as Car[] : [];
  } catch (error) {
    console.error('Error loading cars:', error);
    return [];
  }
};


export const saveCars = async (cars: Car[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('cars', JSON.stringify(cars));
  } catch (error) {
    console.error('Error saving cars:', error);
  }
};

export const saveUsers = async (users: User[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};

// Load users from AsyncStorage
export const loadUsers = async (): Promise<User[]> => {
  try {
    const data = await AsyncStorage.getItem('users');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};

// Delete a user from AsyncStorage
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    const users = await loadUsers();
    const updatedUsers = users.filter((user) => user.id !== userId);
    await saveUsers(updatedUsers);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};


