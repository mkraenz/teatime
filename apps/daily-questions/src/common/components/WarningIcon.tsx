import { Icon } from '@teatime/rnp-components';
import { FC } from 'react';
import { useTheme } from '../../theme';

export const WarningIcon: FC<{ size?: number }> = ({ size = 24 }) => {
  const theme = useTheme();
  return <Icon name={'warning'} size={size} color={theme.colors.error} />;
};
