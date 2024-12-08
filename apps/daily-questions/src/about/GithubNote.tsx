import { Paragraph } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useTranslation } from '../localization/useTranslations';
import { useTheme } from '../theme';

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
  container: {
    marginBottom: 24,
  },
});

const GithubNote: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const openGithub = () => {
    Linking.openURL(
      'https://github.com/mkraenz/teatime/tree/main/apps/daily-questions'
    );
  };
  return (
    <TouchableRipple
      onPress={openGithub}
      style={styles.container}
      accessibilityRole="link"
      accessibilityLabel={t('about:githubA11yLabel')}
      accessibilityHint={t('about:githubA11yHint')}
    >
      <Paragraph>
        {t('about:githubDescription')}
        <Paragraph style={[styles.link, { color: theme.colors.secondary }]}>
          {t('about:githubLinkText')}
        </Paragraph>
      </Paragraph>
    </TouchableRipple>
  );
};

export default GithubNote;
