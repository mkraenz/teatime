import { List } from '@teatime/rnp-components';
import React, { ComponentProps, FC } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../theme';

type Props = {
  onPress: () => void;
} & ComponentProps<typeof List.Item>;

const styles = StyleSheet.create({
  hPadding: { paddingHorizontal: 12 },
});

const SettingsBaseRow: FC<Props> = ({
  disabled,
  accessibilityRole = 'button',
  onPress,
  ...props
}) => {
  const theme = useTheme();
  const textColor = disabled
    ? theme.colors.onSurfaceDisabled
    : theme.colors.text;
  return (
    <List.Item
      titleStyle={[{ color: textColor }]}
      style={styles.hPadding}
      accessibilityRole={accessibilityRole}
      descriptionNumberOfLines={2}
      accessible
      // workaround: avoid error `hook.js:608 A non-serializable value was detected in an action, in the path: `payload`. Value:`
      onPress={() => onPress()}
      disabled={disabled}
      {...props}
    />
  );
};

export default SettingsBaseRow;
