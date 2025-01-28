import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Button from '../Button';
import IOSSettingsModalProps from '../../types/IOSSettingsModalProps';
import { openSettings } from 'react-native-permissions';
import { Variant } from '../../types/ButtonProps';

export const IOSSettingsModal: FC<IOSSettingsModalProps> = ({ isVisible, setIsVisible }) => {

  const onCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onCloseModal} useNativeDriver={true}
    hideModalContentWhileAnimating={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Camera Permissions</Text>
        <View style={styles.buttonContainer}>
          <Button
            variant={Variant.SECONDARY_OUTLINED_SMALL}
            label="Cancel"
            onPress={onCloseModal}
          />
          <Button
            variant={Variant.SECONDARY}
            label="Go to Settings"
            onPress={() => {
              openSettings();
              onCloseModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
