
# Car Management System

## Overview

The **Car Management System** is a React Native application that simplifies the management of car rentals, assignments, and user interactions. The app features a flexible and user-friendly interface for managing cars and their rental histories, assigning cars to users, and tracking financial details like rent payments and fines.

## Features

1. **Add Cars**:
    - Add car details including name, model, color, number plate, and image.
    - Validate all fields before submission.

2. **Edit Cars**:
    - Assign cars to users using a dropdown populated with user data.
    - Auto-fill driving license information based on user selection.
    - Use date pickers for setting rental duration and rent deduction dates.
    - Specify fine amounts for overdue payments and mark rent as paid/unpaid.

3. **Unassign Cars**:
    - Unassign a car from a user, reset its details, and prevent reassignment until unassigned.

4. **Context API Integration**:
    - Manage `users` and `cars` globally using Context API.

5. **Error Handling**:
    - Display meaningful error messages when data loading or saving fails.

## Example Usage

### Context API

```tsx
import { useUsers } from '../../context/useUsersContext';

const { users, setUsers, cars, setCars } = useUsers();
```

### Add Car

```tsx
<Button title="Save Car" onPress={handleSave} />

// Validation Example
if (!carName || !carModel || !carColor || !carNumberPlate || !carImageUri) {
    Alert.alert('Error', 'Please fill all fields');
    return;
}
```

### Edit Car

```tsx
const handleDropdownChange = (value: string | null) => {
    if (value) {
        const selectedUser = users.find(user => user.id === value);
        setDrivingLicense(selectedUser?.drivingLicense || '');
    }
};
```

### Unassign Car

```tsx
const handleUnassign = async () => {
    resetCarDetails();
    const updatedCar = createUpdatedCar(car, '', '', new Date().toISOString().split('T')[0], '0.00', '', '', false);
    setCars(updatedCars);
    try {
        await saveCars(updatedCars);
        navigation.goBack();
    } catch (error) {
        Alert.alert('Error', 'Failed to save car details.');
    }
};
```

## Installation

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the app using `npm start` or `yarn start`.

## Project Structure

```
src
  ├── components        # Reusable components (e.g., Dropdown, ImageUploadBottomSheet)
  ├── context           # Context API for managing users and cars
  ├── helper            # Helper functions (e.g., loadUsers, saveCars)
  ├── screens           # Screens for AddCar, EditCar, etc.
  ├── styles            # Shared stylesheets
  └── types             # TypeScript types and interfaces
```

## License

This project is licensed under the MIT License.
