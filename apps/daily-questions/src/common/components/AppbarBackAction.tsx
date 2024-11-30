import React, { ComponentProps, FC } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../theme';
import { usePlatform } from '../hooks/usePlatform';

type Props = ComponentProps<typeof Appbar.BackAction>;

const AppbarBackAction: FC<Props> = (props) => {
  const theme = useTheme();
  const { isWeb } = usePlatform();
  // web renders an icon button that has a background color of white (light theme) or black (dark theme), but native does not have the background color
  return (
    <Appbar.BackAction
      // // workaround: for some reason the color stays white if not set explicitly
      iconColor={isWeb ? theme.colors.text : theme.colors.appbarText}
      {...props}
    />
  );
};

export default AppbarBackAction;
