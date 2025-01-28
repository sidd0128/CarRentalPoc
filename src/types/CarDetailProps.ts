import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParamListProps';

type CarDetailRouteProp = RouteProp<RootStackParamList, 'CarDetail'>;

interface CarDetailProps {
  route: CarDetailRouteProp;
}
export default CarDetailProps;
