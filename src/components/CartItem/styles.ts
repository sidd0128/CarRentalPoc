import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  carImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  carInfo: {
    flex: 1,
  },
  actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionButton: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    minWidth: 100,
  },
  actionText: {
    color: '#fff',
    textAlign: 'center',
  },
});
  export default styles;
