import { Text as RnText, View } from 'react-native';

/* eslint-disable-next-line */
export interface TextProps {}

export function Text(props: TextProps) {
  return (
    <View>
      <RnText>Welcome to Text!</RnText>
    </View>
  );
}

export default Text;
