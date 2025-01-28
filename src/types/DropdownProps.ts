interface DropdownProps<T> {
    items: { label: string; value: T }[];
    value: T | null;
    setValue: React.Dispatch<React.SetStateAction< T | null>>;
    placeholder?: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onChangeValue?: (value: T | null) => void;
    disabled?: boolean;
    containerStyle?: object;
    dropdownStyle?: object;
  }
  export default DropdownProps;
