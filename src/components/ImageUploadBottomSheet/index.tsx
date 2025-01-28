import React, { FC } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useImagePicker } from '../../hook/ImagePicker/useImagePicker';
import styles from './styles';
import { IOSSettingsModal } from '../IOSSettingsModal';
import ImageUploadBottomSheetProps from '../../types/ImageUploadBottomSheetProps';

const ImageUploadBottomSheet: FC<ImageUploadBottomSheetProps> = ({ refRBSheet }) => {
  const { showCamera, showPhotoGalleryPicker, iosSettingsModalVisible, setIosSettingsModalVisible } = useImagePicker();


  return (
    <RBSheet
      ref={refRBSheet}
      height={300}
      closeOnPressMask={false}
      closeOnDragDown={true}
      closeOnPressBack={false}
      customStyles={{ container: styles.bottomSheetContainer }}
    >
      <View style={styles.header}>
        <Text style={styles.sheetTitle}>Upload Image</Text>
        <TouchableOpacity onPress={() => refRBSheet?.current?.close()} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => {
          refRBSheet?.current?.close();
          showCamera();
        }}
      >
        <Text style={styles.optionText}>Capture Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => {
          refRBSheet?.current?.close();
          setTimeout(() => {
            showPhotoGalleryPicker();
          }, 300); // Adjust delay as needed
        }}
      >
        <Text style={styles.optionText}>Pick from Gallery</Text>
      </TouchableOpacity>

      <IOSSettingsModal
        isVisible={iosSettingsModalVisible}
        setIsVisible={setIosSettingsModalVisible}
      />
    </RBSheet>
  );
};

export default ImageUploadBottomSheet;
