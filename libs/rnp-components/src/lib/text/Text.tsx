// import { Text as RnpText } from 'react-native-paper';
import { Text as RnText } from 'react-native';

// export const Text = RnpText;
// export default Text;

export const Text = (props: any) => (
  <RnText style={{ color: 'blue' }} {...props} />
);
