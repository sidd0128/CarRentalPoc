import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    userItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    userLicense: {
      fontSize: 14,
      color: '#555',
    },
    actionButton: {
      marginHorizontal: 8,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: 'blue',
      borderRadius: 30,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '90%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 16,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      padding: 10,
      borderRadius: 8,
    },
    cancelButton: {
      backgroundColor: '#ccc',
    },
    saveButton: {
      backgroundColor: 'blue',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    emptyText: {
      textAlign: 'center',
      color: '#777',
      marginTop: 20,
      fontSize: 16,
    },
  });

  export default styles;
