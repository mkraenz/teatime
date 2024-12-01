import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Snackbar, Text } from 'react-native-paper';
import { useTheme } from '../theme';
import { Color } from '../theme/theme';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  text: string;
  dismissActionLabel: string;
  dismissActionA11yHint: string;
}

const SuccessMessage: FC<Props> = ({
  visible,
  onDismiss,
  text,
  dismissActionLabel,
  dismissActionA11yHint,
}) => {
  const theme = useTheme();
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: dismissActionLabel,
        onPress: onDismiss,
        accessibilityLabel: dismissActionLabel,
        accessibilityHint: dismissActionA11yHint,
      }}
      style={{
        backgroundColor: theme.colors.tertiary,
        borderColor: Color.LightGrey,
        borderWidth: 1,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <FontAwesome
          name="info-circle"
          size={20}
          color={theme.colors.primary}
        />
        {/* TODO #18 color */}
        <Text style={{ color: theme.dark ? theme.colors.primary : undefined }}>
          {text}
        </Text>
      </View>
    </Snackbar>
  );
};

export default SuccessMessage;
