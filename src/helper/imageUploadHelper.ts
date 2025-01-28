import { Platform } from 'react-native';
import UploadImageProps from '../types/UploadImageProps';
import File from '../services/files';

export const uploadImage = async ({ selectedImageFile, moduleName }: UploadImageProps) => {
  const formData = new FormData();

  if (selectedImageFile ) {
    formData.append('file', {
      uri: Platform.OS === 'android' ? selectedImageFile.uri : selectedImageFile.uri?.replace('file://', ''),
      name: selectedImageFile.fileName || `${moduleName}-${new Date().getTime()}`,
      type: selectedImageFile.type,
    });

    try {
      const response = await File.uploadFile(formData);
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
