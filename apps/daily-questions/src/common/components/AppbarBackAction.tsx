import React, { ComponentProps, FC } from 'react';
import { Appbar, MD2Theme, useTheme } from 'react-native-paper';

type Props = ComponentProps<typeof Appbar.BackAction>;

const AppbarBackAction: FC<Props> = (props) => {
  const theme = useTheme<MD2Theme>();
  return (
    <Appbar.BackAction
      // workaround: for some reason the color stays white if not set explicitly
      iconColor={theme.colors.text}
      {...props}
    />
  );
};

export default AppbarBackAction;
