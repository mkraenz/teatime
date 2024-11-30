import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';
import AppbarBackAction from './common/components/AppbarBackAction';
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
      <AppbarBackAction
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
