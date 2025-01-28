import MediaFile from './MediaFile';

interface AddFilePlaceholderProps {
  height: number;
  width: number;
  file: MediaFile | null;
  onPress: () => void;
}
export default AddFilePlaceholderProps;
