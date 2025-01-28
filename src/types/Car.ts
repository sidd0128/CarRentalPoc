import CarHistoryItem from './CarHistoryItemProps';

interface Car {
  id: string;
  name: string;
  model: string;
  image: string;
  color?: string;
  numberPlate?: string;
  assignedTo?: string;
  drivingLicense?: string;
  endDate?: string;
  history: CarHistoryItem[];
}

export default Car;
