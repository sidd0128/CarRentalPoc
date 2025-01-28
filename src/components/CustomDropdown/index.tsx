import React, { FC } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import DropdownProps from '../../types/DropdownProps';

const Dropdown: FC<DropdownProps> = ({
  items,
  value,
  setValue,
  placeholder = 'Select an option',
  open,
  setOpen,
  onChangeValue,
  disabled = false,
  containerStyle,
  dropdownStyle,
}) => {
  return (
    <DropDownPicker
      items={items}
      containerStyle={[styles.container, containerStyle]}
      value={value}
      setValue={setValue}
      style={[styles.dropdown, dropdownStyle]}
      placeholder={placeholder}
      open={open}
      setOpen={setOpen}
      onChangeValue={onChangeValue}
      disabled={disabled}
    />
  );
};


export default Dropdown;
