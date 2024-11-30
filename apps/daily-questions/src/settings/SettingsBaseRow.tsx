import React, { ComponentProps, FC } from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useTheme } from '../theme';

type Props = {
  value?: string | boolean;
  onPress: () => void;
} & ComponentProps<typeof List.Item>;

const styles = StyleSheet.create({
  hPadding: { paddingHorizontal: 12 },
});

const SettingsBaseRow: FC<Props> = ({
  value,
  disabled,
  accessibilityRole = 'button',
  onPress,
  ...props
}) => {
  const theme = useTheme();
  const textColor = disabled ? theme.colors.disabled : theme.colors.text;
  return (
    <List.Item
      titleStyle={[{ color: textColor }]}
      style={styles.hPadding}
      accessibilityRole={accessibilityRole}
      descriptionNumberOfLines={2}
      accessible
      // workaround: avoid error `hook.js:608 A non-serializable value was detected in an action, in the path: `payload`. Value:`
      onPress={() => onPress()}
      {...props}
    />
  );
};

export default SettingsBaseRow;
