import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarList from './screens/ListCarScreen';
import EditCar from './screens/EditCarScreen';
import CarDetail from './screens/CarDetailScreen';
import AddCarScreen from './screens/AddCarScreen';
import { ImagePickerProvider } from './context/ImagePickerContext';
import { RootStackParamList } from './types/RootStackParamListProps';
import UserList from './screens/userListScreen';
import { UserProvider } from './context/useUsersContext';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {

  return (
    <ImagePickerProvider>
      <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CarList">
          <Stack.Screen name="CarList" component={CarList} options={{ title: 'Car List' }} />
          <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'Add Car' }} />
          <Stack.Screen name="EditCar" component={EditCar} options={{ title: 'Edit Car' }} />
          <Stack.Screen name="CarDetail" component={CarDetail} options={{ title: 'Car Detail' }} />
          <Stack.Screen name="UserList" component={UserList} options={{ title: 'User List' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
    </ImagePickerProvider>
  );
};

export default App;
