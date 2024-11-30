import React, { FC } from 'react';
import { AccessibilityRole } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { useTranslation } from '../localization/useTranslations';
import { useTheme } from '../theme';

interface Props {
  title: string;
  description?: string;
  onPress: () => void;
  value: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  disabled?: boolean;
}

const SettingsSwitchRow: FC<Props> = ({
  title,
  description,
  onPress,
  value,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button', // not using switch as it is not working properly with accessibility
  disabled,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <List.Item
      title={title}
      titleStyle={{
        color: disabled ? theme.colors.disabled : theme.colors.text,
      }}
      description={description}
      descriptionNumberOfLines={2}
      accessible
      right={() => (
        <Switch
          style={{ alignSelf: 'center' }}
          onChange={() => onPress()}
          value={value}
          // workaround: accessible={false} did not work
          accessibilityElementsHidden
          importantForAccessibility="no"
          disabled={disabled}
        />
      )}
      onPress={() => onPress()}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      disabled={disabled}
      accessibilityValue={{ text: value ? t('general:on') : t('general:off') }}
      style={{ paddingHorizontal: 12 }}
    />
  );
};

export default SettingsSwitchRow;
