import React, { ComponentProps, FC } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../theme/useTheme';
import { usePlatform } from '../hooks/usePlatform';

type Props = ComponentProps<typeof Appbar.Action>;

const AppbarAction: FC<Props> = (props) => {
  const theme = useTheme();
  const { isWeb } = usePlatform();
  // web renders an icon button that has a background color of white (light theme) or black (dark theme), but native does not have the background color
  return (
    <Appbar.Action
      iconColor={isWeb ? theme.colors.text : theme.colors.appbarText}
      {...props}
    />
  );
};

export default AppbarAction;
