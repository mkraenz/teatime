import { Text as RnpText } from 'react-native-paper';

// export const Text = RnpText;
// export default Text;

export const Text = (props: any) => (
  <RnpText style={{ color: 'red' }} {...props} />
);
