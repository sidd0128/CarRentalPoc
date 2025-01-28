import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AddFilePlaceholderProps from '../../types/AddFilePlaceholderProps';

const AddFilePlaceholder: FC<AddFilePlaceholderProps> = (props) => {
  const uri = () =>
    props.file?.asset
      ? props.file?.asset.uri
      : props.file?.fileUrl;

  return (
    <TouchableOpacity
      style={[styles.container, { height: props.height, width: props.width }]}
      onPress={props.onPress}
    >
      {props.file ? (
        <Image
          style={[styles.thumbnail, { height: props.height, width: props.width }]}
          source={{
            uri: uri(),
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default AddFilePlaceholder;
