import { FontAwesome } from '@expo/vector-icons';
import { Banner } from '@teatime/rnp-components';
import * as React from 'react';
import { FC } from 'react';
import { useTranslation } from '../localization/useTranslations';
import { useTheme } from '../theme';

interface Props {
  visible: boolean;
  onPress: () => void;
}

const WarningBanner: FC<Props> = ({ visible, onPress }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: t('statistics:warningActionButton'),
          onPress,
        },
      ]}
      icon={({ size }) => (
        <FontAwesome name={'warning'} size={size} color={theme.colors.error} />
      )}
    >
      {t('statistics:warningDescription')}
    </Banner>
  );
};

export default WarningBanner;
