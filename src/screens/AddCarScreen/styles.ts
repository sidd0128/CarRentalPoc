import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    header: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
    },
    imagePickerButton: {
      marginBottom: 15,
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
      alignItems: 'center',
    },
    imagePickerText: {
      color: '#fff',
    },
    imagePreview: {
      width: 100,
      height: 100,
      marginBottom: 15,
      resizeMode: 'cover',
    },
  });
  export default styles;
