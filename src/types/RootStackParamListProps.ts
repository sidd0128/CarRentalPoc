import Car from './Car';

export type RootStackParamList = {
  CarList: undefined;
  AddCar: undefined;
  EditCar: { car: Car };
  CarDetail: { car: Car };
  UserList: undefined;
};
