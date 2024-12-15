import { ComponentProps } from 'react';
import { Title as RnpTitle } from 'react-native-paper';

export const Title = (props: ComponentProps<typeof RnpTitle>) => (
  <RnpTitle role="heading" {...props} />
);
export default Title;
