import React, {FC} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import ButtonProps from '../../types/ButtonProps';


const Button: FC<ButtonProps> = ({ label, onPress, variant }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[variant]]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
export default Button;
