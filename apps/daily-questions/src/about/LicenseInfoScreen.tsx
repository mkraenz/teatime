import { Paragraph, Title } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from '../localization/useTranslations';
import { LibraryInfo } from './about-nav';

interface Props {
  route: {
    params: LibraryInfo;
  };
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});

const LicenseInfoScreen: FC<Props> = (props) => {
  const { t } = useTranslation();
  const { name, licenseType, installedVersion, author, link } =
    props.route.params;
  return (
    <View style={styles.container}>
      <Title>{name}</Title>
      <Paragraph>
        {t('about:licenseInfoLicense', { license: licenseType })}
      </Paragraph>
      <Paragraph>{t('about:licenseInfoAuthor', { author })}</Paragraph>
      <Paragraph>
        {t('about:licenseInfoVersion', { version: installedVersion })}
      </Paragraph>
      <Paragraph>{t('about:licenseInfoLink', { link })}</Paragraph>
    </View>
  );
};

export default LicenseInfoScreen;
