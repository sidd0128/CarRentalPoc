export enum Variant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SECONDARY_OUTLINED_SMALL = 'SECONDARY_OUTLINED_SMALL',
}
interface ButtonProps {
  label: string;
  onPress: () => void;
  variant: Variant;
}
export default ButtonProps;

