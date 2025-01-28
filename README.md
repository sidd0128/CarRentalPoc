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


### Data Handling

#### Load Cars

```tsx
export const loadCars = async (): Promise<Car[]> => {
  try {
    const data = await AsyncStorage.getItem('cars');
    return data ? JSON.parse(data) as Car[] : [];
  } catch (error) {
    console.error('Error loading cars:', error);
    return [];
  }
};
```

#### Save Cars

```tsx
export const saveCars = async (cars: Car[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('cars', JSON.stringify(cars));
  } catch (error) {
    console.error('Error saving cars:', error);
  }
};
```

#### Save Users

```tsx
export const saveUsers = async (users: User[]): Promise<void> => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};
```

#### Load Users

```tsx
export const loadUsers = async (): Promise<User[]> => {
  try {
    const data = await AsyncStorage.getItem('users');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
};
```

#### Delete User

```tsx
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    const users = await loadUsers();
    const updatedUsers = users.filter((user) => user.id !== userId);
    await saveUsers(updatedUsers);
  } catch (error) {
    console.error('Error deleting user:', error);
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

## Video 

https://github.com/user-attachments/assets/104d43ed-2702-40a6-9e1a-b4645f26b424

## License

This project is licensed under the MIT License.

**Note:** The code uploaded is a Proof of Concept (POC), not a fully functional application. It has been shared to educate new developers on how to write organized and structured code. Anyone is free to extend its functionality as per their project requirements.

