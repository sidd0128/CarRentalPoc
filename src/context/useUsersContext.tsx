import React, { createContext, useState, ReactNode, useContext, useEffect, FC } from 'react';
import User from '../types/UserProps';
import { loadCars, loadUsers } from '../helper/helper';
import Car from '../types/Car';

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
  loadError: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storedUsers, storedCars] = await Promise.all([loadUsers(), loadCars()]);
        setUsers(storedUsers || []);
        setCars(storedCars || []);
      } catch (error) {
        console.error('Failed to load data:', error);
        setLoadError('Failed to load users or cars. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, cars, setCars, loadError }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};
