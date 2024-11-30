import React, { ComponentProps, FC } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../theme';

type Props = ComponentProps<typeof Appbar.BackAction>;

const AppbarBackAction: FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <Appbar.BackAction
      // workaround: for some reason the color stays white if not set explicitly
      iconColor={theme.colors.text}
      {...props}
    />
  );
};

export default AppbarBackAction;
