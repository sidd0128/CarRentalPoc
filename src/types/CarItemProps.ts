import Car from './Car';

interface CarItemProps {
  car: Car;
  onDelete: (id: string) => void;
}
export default CarItemProps;
