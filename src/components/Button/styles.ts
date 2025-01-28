import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    label: {
      color: 'white',
      fontWeight: 'bold',
    },
    PRIMARY: {
      backgroundColor: 'blue',
    },
    SECONDARY: {
      backgroundColor: 'gray',
    },
    SECONDARY_OUTLINED_SMALL: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'gray',
    },
  });
export default styles;
