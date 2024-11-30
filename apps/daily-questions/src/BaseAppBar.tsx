import { DrawerHeaderProps } from '@react-navigation/drawer';
import React, { FC, PropsWithChildren } from 'react';
import { Appbar, MD2Theme, useTheme } from 'react-native-paper';
import AppbarAction from './common/components/AppbarAction';
import { useTranslation } from './localization/useTranslations';

const BaseAppBar: FC<DrawerHeaderProps & PropsWithChildren> = (props) => {
  const { t } = useTranslation();
  const title = props.options.title ?? props.route.name;
  const theme = useTheme<MD2Theme>();
  return (
    <Appbar.Header>
      <AppbarAction
        icon="menu"
        onPress={() => props.navigation.openDrawer()}
        accessibilityLabel={t('general:openDrawerA11yLabel')}
      />
      <Appbar.Content
        title={title}
        accessibilityLabel={t('general:appbarHeaderAllyLabel', { title })}
      />
      {props.children}
    </Appbar.Header>
  );
};

export default BaseAppBar;
