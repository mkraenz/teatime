import { Appbar } from '@teatime/rnp-components';
import React, { FC } from 'react';
import { useTranslation } from './localization/useTranslations';

interface Props {
  navigation: { goBack: () => void };
  route: { name: string };
  options: {
    title?: string;
  };
}

const BackAppBar: FC<Props> = (props) => {
  const { t } = useTranslation();
  const title = props.options.title ?? props.route.name;
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => props.navigation.goBack()}
        accessibilityHint={t('general:navigateBackAllyHint')}
      />
      <Appbar.Content
        title={title}
        accessibilityLabel={t('general:appbarHeaderAllyLabel', { title })}
      />
    </Appbar.Header>
  );
};

export default BackAppBar;
