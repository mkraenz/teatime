import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { toggleDialogOpen } from '../../accessibility/accessibility.slice';
import { Hidden } from '../../common';
import { setHistory } from '../../history/history.slice';
import { useTranslation } from '../../localization/useTranslations';
import { setQuestions } from '../../questions/questions.slice';
import { RootState } from '../../store';
import SettingsButtonRow from '../SettingsButtonRow';
import { ExportedHistoryAndQuestions } from './ExportHistory';
import { validateImportedHistoryString } from './import-history-validation';
import { validateImportedQuestionsString } from './import-questions-validation';
import ImportHistoryConfirmationDialog from './ImportHistoryConfirmationDialog';
import ImportHistoryErrorDialog from './ImportHistoryErrorDialog';
import ImportHistorySuccessMessage from './ImportHistorySuccessMessage';

const mapState = (state: RootState) => ({
  devMode: state.settings.devMode,
});
const mapDispatch = {
  setHistory,
  setQuestions,
  toggleDialogOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ImportHistoryFileSystem: FC<PropsFromRedux> = ({
  setHistory,
  setQuestions,
  toggleDialogOpen,
  devMode,
}) => {
  const [confirmationShown, showConfirmation] = useState(false);
  const [errorDialogShown, showErrorDialog] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();

  const handleConfirm = async () => {
    try {
      const pick = await DocumentPicker.getDocumentAsync({
        // type: 'application/json', // for some reason I was not able to pick the previously exported file when setting this.
        copyToCacheDirectory: true,
      });

      if (pick.canceled) {
        return Alert.alert('Canceled. No file selected.');
      }

      const asset = pick.assets[0];
      if (!asset) return Alert.alert('Something went wrong. No asset found.');

      const text = await FileSystem.readAsStringAsync(asset.uri);
      const historyValid = validateImportedHistoryString(text);
      const questionsValid = validateImportedQuestionsString(text);
      if (historyValid && questionsValid) {
        const imported: ExportedHistoryAndQuestions = JSON.parse(text);
        // save to parse because of validation
        setHistory({ history: imported.history });
        setQuestions({ questions: imported.questions });
        setSuccess(true);
      } else {
        showErrorDialog(true);
      }
      showConfirmation(false);
    } catch (error) {
      console.error(error);
      showErrorDialog(true);
    } finally {
      toggleDialogOpen();
    }
  };

  return (
    <Hidden hidden={!devMode}>
      <ImportHistorySuccessMessage
        onDismiss={() => setSuccess(false)}
        visible={success}
      />
      <ImportHistoryErrorDialog
        visible={errorDialogShown}
        onDismiss={() => {
          toggleDialogOpen();
          showErrorDialog(false);
        }}
      />
      <ImportHistoryConfirmationDialog
        visible={confirmationShown}
        onCancel={() => {
          toggleDialogOpen();
          showConfirmation(false);
        }}
        onConfirm={handleConfirm}
      />
      <SettingsButtonRow
        title={t('settings:importHistoryExperimental')}
        accessibilityLabel={t('settings:importHistoryExperimental')}
        accessibilityHint={t('settings:importHistoryHintExperimental')}
        onPress={() => {
          toggleDialogOpen();
          showConfirmation(true);
        }}
      />
    </Hidden>
  );
};

export default connector(ImportHistoryFileSystem);
