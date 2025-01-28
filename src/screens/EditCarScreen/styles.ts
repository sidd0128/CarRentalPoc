import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // General Container
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  // Header and Text Styles
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },

  inputContainer: {
    marginBottom: 15,
  },

  input: {
    height: 45,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },

  helperText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },

  // Buttons and Actions
  saveButton: {
    backgroundColor: '#00BFFF',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  unassignButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unassignButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  datePickerButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  datePickerButtonText: {
    fontSize: 16,
    color: '#333',
  },

  // Checkbox Styles
  checkboxContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxText: {
    fontSize: 16,
    color: '#333',
  },

  // FlatList History Item
  historyItem: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },

  historyText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },

  // User Dropdown Styles
  dropdown: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },

  dropdownStyle: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },

  addUserButton: {
    marginTop: 10,
    backgroundColor: '#00BFFF',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addUserText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Floating Action Button for Adding User
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00BFFF',
    borderRadius: 30,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal Content
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: '#ccc',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default styles;
