import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Appbar } from '@teatime/rnp-components';
import React, { FC, PropsWithChildren } from 'react';
import { useTranslation } from './localization/useTranslations';

const BaseAppBar: FC<DrawerHeaderProps & PropsWithChildren> = (props) => {
  const { t } = useTranslation();
  const title = props.options.title ?? props.route.name;
  return (
    <Appbar.Header>
      <Appbar.Action
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
