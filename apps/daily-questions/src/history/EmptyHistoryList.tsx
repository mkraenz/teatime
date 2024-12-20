import { useNavigation } from '@react-navigation/native';
import { Button, Paragraph } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from '../localization/useTranslations';
import { GlobalDrawerNavigationProp } from '../nav/nav.types';

const styles = StyleSheet.create({
  mg: {
    marginBottom: 24,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});

const EmptyHistoryList: FC = () => {
  const nav = useNavigation<GlobalDrawerNavigationProp>();
  const { t } = useTranslation();

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Paragraph style={styles.mg}>
        {t('history:emptyHistoryDescription')}
      </Paragraph>
      <Button
        style={styles.mg}
        mode="contained"
        onPress={() => nav.navigate('Dailies')}
        accessibilityLabel={t('history:emptyHistoryButton')}
        accessibilityHint={t('history:emptyHistoryButtonA11yHint')}
      >
        {t('history:emptyHistoryButton')}
      </Button>
    </View>
  );
};

export default EmptyHistoryList;
