import { RootStackParamList } from './RootStackParamListProps';
import { RouteProp } from '@react-navigation/native';

type EditCarRouteProp = RouteProp<RootStackParamList, 'EditCar'>;

interface EditCarProps {
  route: EditCarRouteProp;
}

export default EditCarProps;
