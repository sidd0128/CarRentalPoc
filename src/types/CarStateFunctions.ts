type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface CarStateFunctions {
    setAssignedTo: SetState<string>;
    setDrivingLicense: SetState<string>;
    setPaidStatus: SetState<boolean>;
    setRentalAmount: SetState<string>;
    setSelectedRentalDate: SetState<string>;
    setSelectedDeductionDate: SetState<string>;
    setFineAmount: SetState<string>;
  }