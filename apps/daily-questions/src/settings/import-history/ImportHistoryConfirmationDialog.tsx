import { Button, Dialog, Paragraph, Portal } from '@teatime/rnp-components';
import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import { WarningIcon } from '../../common/components/WarningIcon';
import { useTranslation } from '../../localization/useTranslations';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ImportHistoryConfirmationDialog: FC<Props> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation();
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title accessibilityRole="header">
          <WarningIcon /> {t('settings:importHistoryDialogTitle')}{' '}
          <WarningIcon />
        </Dialog.Title>
        <Dialog.Content style={{ flexDirection: 'row' }}>
          <Paragraph>{t('settings:importHistoryDialogDescription')}</Paragraph>
        </Dialog.Content>
        <View style={{ flexDirection: 'row-reverse' }}>
          <Dialog.Actions>
            <Button onPress={() => onConfirm()}>{t('general:confirm')}</Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button onPress={() => onCancel()}>{t('general:cancel')}</Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

export default ImportHistoryConfirmationDialog;
