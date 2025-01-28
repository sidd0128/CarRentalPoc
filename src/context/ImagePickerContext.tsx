import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Asset } from 'react-native-image-picker';

interface ImagePickerContextType  {
  selectedImage: Asset | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<Asset | null>>;
};

const ImagePickerContext = createContext<ImagePickerContextType | undefined>(undefined);

export const ImagePickerProvider = ({ children }: { children: ReactNode }) => {
  const [selectedImage, setSelectedImage] = useState<Asset | null>(null);

  return (
    <ImagePickerContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImagePickerContext.Provider>
  );
};

export const useImagePickerContext = (): ImagePickerContextType => {
  const context = useContext(ImagePickerContext);
  if (!context) {
    throw new Error('useImagePickerContext must be used within a ImagePickerProvider');
  }
  return context;
};
