import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'relative',
    backgroundColor: '#f9f9f9', // Added background color to the main container
  },
  searchBar: {
    height: 48, // Slightly increased height for better touch target
    borderColor: '#ddd', // Softer border color for better aesthetics
    borderWidth: 1,
    borderRadius: 10, // Increased border radius for smoother edges
    paddingLeft: 12, // Increased padding for better readability
    marginBottom: 20, // Increased margin for better spacing
    backgroundColor: '#fff', // White background for the input field
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Slightly raised the buttons
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingHorizontal: 16, // Added padding to avoid buttons being too close to the edge
  },
  floatingButton: {
    width: 64, // Increased size for better visual appeal
    height: 64, // Increased size for better visual appeal
    borderRadius: 32, // Half of the width/height for perfect circle
    backgroundColor: '#007BFF', // Retained the blue color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Added shadow for depth effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Android shadow effect
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 28, // Increased font size for better visibility
    fontWeight: 'bold', // Added bold style for emphasis
  },
  addUserButton: {
    width: 64, // Increased size for better visual appeal
    height: 64, // Increased size for better visual appeal
    borderRadius: 32, // Half of the width/height for perfect circle
    backgroundColor: '#28a745', // Green color for report button
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000', // Added shadow for depth effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Android shadow effect
  },
  filterButton: {
    width: 56, // Adjusted width for consistency with other buttons
    height: 56, // Adjusted height for consistency with other buttons
    borderRadius: 28, // Half of the width/height for perfect circle
    backgroundColor: '#2196F3', // Blue color for the filter button
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16, // Spacing between filter and other buttons
    shadowColor: '#000', // Added shadow for depth effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Android shadow effect
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for modal
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust width of modal content
    elevation: 10, // For shadow effect on Android
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#f44336', // Red background for close button
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f1f1f1', // Slight background for picker
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default styles;
