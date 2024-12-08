import { Button, Dialog, Paragraph, Portal } from '@teatime/rnp-components';
import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import { WarningIcon } from '../../common/components/WarningIcon';
import { useTranslation } from '../../localization/useTranslations';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

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
