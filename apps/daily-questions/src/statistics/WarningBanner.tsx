import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { FC } from 'react';
import { Banner } from 'react-native-paper';
import { useTheme } from '../theme';

interface Props {
  visible: boolean;
  onPress: () => void;
}

const WarningBanner: FC<Props> = ({ visible, onPress }) => {
  const theme = useTheme();
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Display all',
          onPress,
        },
      ]}
      icon={({ size }) => (
        <FontAwesome name={'warning'} size={size} color={theme.colors.error} />
      )}
    >
      Please select at least one question to display.
    </Banner>
  );
};

export default WarningBanner;
