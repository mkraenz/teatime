import { FontAwesome } from '@expo/vector-icons';
import { Button, Paragraph, Portal } from '@teatime/rnp-components';
import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import { Dialog } from 'react-native-paper';
import { useTranslation } from '../../localization/useTranslations';
import { useTheme } from '../../theme';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

const WarningIcon: FC = () => {
  const theme = useTheme();
  return (
    <FontAwesome name={'warning'} size={24} color={theme.colors.secondary} />
  );
};

const ImportHistoryErrorDialog: FC<Props> = ({ visible, onDismiss }) => {
  const { t } = useTranslation();
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>
          <WarningIcon /> {t('settings:importHistoryErrorDialogTitle')}{' '}
          <WarningIcon />
        </Dialog.Title>
        <Dialog.Content style={{ flexDirection: 'row' }}>
          <Paragraph>
            {t('settings:importHistoryErrorDialogDescription')}
          </Paragraph>
        </Dialog.Content>
        <View style={{ flexDirection: 'row-reverse' }}>
          <Dialog.Actions>
            <Button onPress={() => onDismiss()}>{t('general:ok')}</Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

export default ImportHistoryErrorDialog;
