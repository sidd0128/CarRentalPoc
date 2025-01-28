interface CarHistoryItem {
    assignedTo: string;
    drivingLicense: string;
    startDate: string;
    endDate: string;
    rentalAmount: number;
    selectedDeductionDate: string;
    status: 'pending' | 'paid';
  }
  export default CarHistoryItem;
