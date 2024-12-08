import { Text } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { AccessibilityRole, StyleSheet } from 'react-native';
import { useTheme } from '../theme';
import SettingsBaseRow from './SettingsBaseRow';

interface Props {
  title: string;
  description?: string;
  onPress: () => void;
  value?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  /** @default button */
  accessibilityRole?: AccessibilityRole;
}

const styles = StyleSheet.create({
  valueText: {
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
});

const SettingsButtonRow: FC<Props> = ({ value, disabled, ...props }) => {
  const theme = useTheme();
  const textColor = disabled
    ? theme.colors.onSurfaceDisabled
    : theme.colors.text;
  return (
    <SettingsBaseRow
      accessibilityValue={{ text: value }}
      right={
        value !== undefined
          ? () => (
              <Text style={[{ color: textColor }, styles.valueText]}>
                {value}
              </Text>
            )
          : undefined
      }
      disabled={disabled}
      {...props}
    />
  );
};

export default SettingsButtonRow;
