import * as FileSystem from 'expo-file-system';
import React, { FC } from 'react';
import { Alert, Platform } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { Hidden } from '../../common';
import { History } from '../../history/history.slice';
import { useTranslation } from '../../localization/useTranslations';
import { selectQuestions } from '../../questions/questions.selectors';
import { Question } from '../../questions/questions.slice';
import { RootState } from '../../store';
import SettingsButtonRow from '../SettingsButtonRow';

const mapState = (state: RootState) => ({
  questions: selectQuestions(state),
  history: state.history.history,
  devMode: state.settings.devMode,
});
const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

export interface ExportedHistoryAndQuestions {
  questions: Question[];
  history: History;
}

const getFilename = () => {
  const nowString = new Date()
    .toISOString()
    .replaceAll('.', '-')
    .replaceAll(':', '-');
  return `daily-questions-export-${nowString}.json`;
};

const ExportHistory: FC<PropsFromRedux> = ({ history, questions, devMode }) => {
  const { t } = useTranslation();
  const handlePress = async () => {
    try {
      const mimeType = 'application/json';
      const content = JSON.stringify({ questions, history });
      const filename = getFilename();

      if (Platform.OS !== 'android') {
        Alert.alert(`Not implemented on ${Platform.OS}`);
      }

      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const uri = await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          filename,
          mimeType
        );
        await FileSystem.writeAsStringAsync(uri, content, {
          encoding: FileSystem.EncodingType.UTF8,
        });
        Alert.alert(`success. File saved to ${uri}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Hidden hidden={!devMode}>
      <SettingsButtonRow
        title={t('settings:exportHistoryExperimental')}
        accessibilityLabel={t('settings:exportHistoryExperimental')}
        accessibilityHint={t('settings:exportHistoryExperimental')}
        onPress={handlePress}
      />
    </Hidden>
  );
};

export default connector(ExportHistory);
