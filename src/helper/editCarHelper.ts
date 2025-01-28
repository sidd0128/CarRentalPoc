import Car from '../types/Car';
import CarHistoryItem from '../types/CarHistoryItemProps';

const createUpdatedCar = (
  car: Car,
  assignedTo: string,
  drivingLicense: string,
  selectedRentalDate: string,
  rentalAmount: string,
  selectedDeductionDate: string,
  fineAmount: string,
  paidStatus: boolean,
): Car => {
  const startDate = new Date();
  const endDate = new Date(selectedRentalDate);

  const historyItem: CarHistoryItem = {
    assignedTo: assignedTo || '',
    drivingLicense: drivingLicense || '',
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    rentDeductionDate: selectedDeductionDate || '',
    rentalAmount: assignedTo ? parseFloat(rentalAmount) : 0,
    status: paidStatus ? 'paid' : 'unpaid',
    fineAmount: fineAmount ? parseFloat(fineAmount) : 0,
  };

  const updatedHistory = [historyItem, ...car.history];

  return {
    ...car,
    assignedTo: assignedTo || '',
    drivingLicense: assignedTo ? drivingLicense : '',
    endDate: selectedRentalDate,
    history: updatedHistory,
  };
};

export default createUpdatedCar;
