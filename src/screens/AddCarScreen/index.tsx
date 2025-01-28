import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles';
import { loadCars, saveCars } from '../../helper/helper';
import { useNavigation } from '@react-navigation/native';
import AddFilePlaceholder from '../../components/AddFilePlaceholder';
import { useImagePicker } from '../../hook/ImagePicker/useImagePicker';
import { RootStackParamList } from '../../types/RootStackParamListProps';
import { StackNavigationProp } from '@react-navigation/stack';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageUploadBottomSheet from '../../components/ImageUploadBottomSheet';
import { useUsers } from '../../context/useUsersContext';

type CarListNavigationProp = StackNavigationProp<RootStackParamList, 'CarList'>;

const AddCarScreen = () => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carNumberPlate, setCarNumberPlate] = useState(''); // New state for number plate
  const [carImageUri, setCarImageUri] = useState<string | null>(null);
  const refRBSheet = useRef<typeof RBSheet | null>(null);
  const { selectedImage, setSelectedImage } = useImagePicker();
  const navigation = useNavigation<CarListNavigationProp>();
  const {setCars} = useUsers();

  useEffect(() => {
    if (selectedImage) {
      setCarImageUri(selectedImage.uri);
    }
  }, [selectedImage]);

  const handleSave = async () => {
    if (!carName || !carModel || !carColor || !carNumberPlate || !carImageUri) { // Include number plate validation
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const cars = await loadCars();
      const newCar = {
        id: Date.now().toString(),
        name: carName,
        model: carModel,
        color: carColor,
        numberPlate: carNumberPlate,
        image: carImageUri,
        history: [],
      };

      const updatedCars = [...cars, newCar];
      setCars(updatedCars);
      await saveCars(updatedCars);

      Alert.alert('Success', 'Car details added successfully');
      setCarName('');
      setCarModel('');
      setCarColor('');
      setCarNumberPlate('');
      setCarImageUri(null);
      setSelectedImage(null);
      navigation.goBack();
    } catch (error) {
      console.error('Error saving car details:', error);
      Alert.alert('Error', 'There was an issue saving the car details.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Car</Text>

      <TextInput
        style={styles.input}
        placeholder="Car Name"
        value={carName}
        onChangeText={setCarName}
      />
      <TextInput
        style={styles.input}
        placeholder="Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Car Color"
        value={carColor}
        onChangeText={setCarColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Car Number Plate"
        value={carNumberPlate}
        onChangeText={setCarNumberPlate}
      />

      <AddFilePlaceholder
        height={200}
        width={200}
        file={carImageUri ? { fileUrl: carImageUri } : null}
        onPress={() => refRBSheet.current?.open()}
      />

      <Button title="Save Car" onPress={handleSave} />
      <ImageUploadBottomSheet refRBSheet={refRBSheet} />
    </View>
  );
};

export default AddCarScreen;
