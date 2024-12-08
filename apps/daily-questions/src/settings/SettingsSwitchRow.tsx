import { Switch } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { AccessibilityRole, StyleSheet } from 'react-native';
import { useTranslation } from '../localization/useTranslations';
import SettingsBaseRow from './SettingsBaseRow';

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

const styles = StyleSheet.create({
  switch: { alignSelf: 'center' },
});

const SettingsSwitchRow: FC<Props> = ({
  onPress,
  value,
  disabled,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <SettingsBaseRow
      right={() => (
        <Switch
          style={styles.switch}
          onChange={() => onPress()}
          value={value}
          // workaround: accessible={false} did not work
          accessibilityElementsHidden
          importantForAccessibility="no"
          disabled={disabled}
        />
      )}
      accessibilityValue={{ text: value ? t('general:on') : t('general:off') }}
      onPress={() => onPress()}
      disabled={disabled}
      {...props}
    />
  );
};

export default SettingsSwitchRow;
