import React, { FC } from 'react';
import { AccessibilityRole, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useTheme } from '../theme';

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

const styles = StyleSheet.create({});

const SettingsButtonRow: FC<Props> = ({
  title,
  description,
  onPress,
  value,
  accessibilityLabel,
  accessibilityHint,
  disabled,
  accessibilityRole = 'button',
}) => {
  const theme = useTheme();
  const textColor = disabled ? theme.colors.disabled : theme.colors.text;
  return (
    <List.Item
      title={title}
      titleStyle={[{ color: textColor }]}
      description={description}
      right={
        value !== undefined
          ? () => (
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: textColor,
                  alignSelf: 'center',
                }}
              >
                {value}
              </Text>
            )
          : undefined
      }
      onPress={() => onPress()}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      disabled={disabled}
      accessibilityValue={{ text: value }}
      style={{ paddingHorizontal: 12 }}
    />
  );
};

export default SettingsButtonRow;
