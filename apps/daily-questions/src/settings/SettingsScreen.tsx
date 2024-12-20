import { List } from '@teatime/rnp-components';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from '../localization/useTranslations';
import AutofocusSwitch from './AutofocusSwitch';
import AutoNavigateOnAnswerSwitch from './AutoNavigateOnAnswerSwitch';
import BelatedDailiesTimePicker from './BelatedDailiesTimePicker';
import DarkModeSwitch from './DarkModeSwitch';
import DevModeSwitch from './DevModeSwitch';
import HighContrastModeSwitch from './HighContrastModeSwitch';
import ExportHistory from './import-history/ExportHistory';
import ExportHistoryFileSystem from './import-history/ExportHistoryFileSystem';
import ImportHistory from './import-history/ImportHistory';
import ImportHistoryFileSystem from './import-history/ImportHistoryFileSystem';
import LanguageSelect from './LanguageSelect';
import NotificationSwitch from './NotificationSwitch';
import NotificationTimePicker from './NotificationTimePicker';
import ShowAppbarSwitch from './ShowAppbarSwitch';
import ShowPointsQuestionInputPlaceholderSwitch from './ShowPointsQuestionInputPlaceholderSwitch';
import UniteConfirmAndShareButtonsSwitch from './UniteConfirmAndShareButtonsSwitch';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

const SettingsScreen = () => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader accessibilityRole="header">
          {t('settings:sectionGeneral')}
        </List.Subheader>
        <LanguageSelect />
        <DarkModeSwitch />
        <NotificationSwitch />
        <NotificationTimePicker />
        <BelatedDailiesTimePicker />
      </List.Section>
      <List.Section>
        <List.Subheader accessibilityRole="header">
          {t('settings:sectionAccessibility')}
        </List.Subheader>
        <HighContrastModeSwitch />
        <AutoNavigateOnAnswerSwitch />
        <AutofocusSwitch />
      </List.Section>
      <List.Section>
        <List.Subheader accessibilityRole="header">
          {t('settings:sectionCustomization')}
        </List.Subheader>
        <UniteConfirmAndShareButtonsSwitch />
        <ShowPointsQuestionInputPlaceholderSwitch />
        <ShowAppbarSwitch />
      </List.Section>
      <List.Section>
        <List.Subheader accessibilityRole="header">
          {t('settings:sectionAdvanced')}
        </List.Subheader>
        <ExportHistory />
        <ImportHistory />
        <ExportHistoryFileSystem />
        <ImportHistoryFileSystem />
        <DevModeSwitch />
      </List.Section>
    </ScrollView>
  );
};

export default SettingsScreen;
