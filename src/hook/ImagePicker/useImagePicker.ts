import { useState } from 'react';
import { Platform } from 'react-native';
import { launchCamera, launchImageLibrary, ImagePickerResponse, ImageLibraryOptions } from 'react-native-image-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useImagePickerContext } from '../../context/ImagePickerContext';

export const useImagePicker = () => {
  const { selectedImage, setSelectedImage } = useImagePickerContext();
  const [iosSettingsModalVisible, setIosSettingsModalVisible] = useState(false);
  const showCamera = () => {
    const options = { mediaType: 'photo', saveToPhotos: true };
    const permissionToBeChecked = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

    check(permissionToBeChecked).then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera(options, (response: ImagePickerResponse) => {
          if (response.assets && response.assets.length) {
            setSelectedImage(response.assets[0]);
          }
        });
      } else {
        setIosSettingsModalVisible(true);
      }
    });
  };

  const showPhotoGalleryPicker = () => {
    const options: ImageLibraryOptions = { mediaType: 'photo', selectionLimit: 1 };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets && response.assets.length) {
        setSelectedImage(response.assets[0]);
      }
    });
  };

  return {
    showCamera,
    showPhotoGalleryPicker,
    selectedImage,
    setSelectedImage,
    iosSettingsModalVisible,
    setIosSettingsModalVisible,
  };
};
