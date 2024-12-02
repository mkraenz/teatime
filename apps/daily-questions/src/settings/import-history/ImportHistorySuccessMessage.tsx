import React, { FC } from 'react';
import { Portal } from 'react-native-paper';
import SuccessMessage from '../../dailies/SuccessMessage';
import { useTranslation } from '../../localization/useTranslations';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

const ImportHistorySuccessMessage: FC<Props> = ({ visible, onDismiss }) => {
  const { t } = useTranslation();
  return (
    <Portal>
      <SuccessMessage
        visible={visible}
        onDismiss={onDismiss}
        text={t('settings:importHistorySuccessMessage')}
        dismissActionLabel={t('dailies:ok')}
        dismissActionA11yHint={t(
          'dailies:confirmedSuccessfullySnackbarDismissActionA11yHint'
        )}
      />
    </Portal>
  );
};

export default ImportHistorySuccessMessage;
