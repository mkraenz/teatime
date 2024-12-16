import { PaperProvider } from '@teatime/rnp-components';
import React, { FC, PropsWithChildren } from 'react';
import { lightTheme } from '../theme/theme';

const MockPaperProvider: FC<PropsWithChildren<{ dark?: boolean }>> = ({
  children,
  dark = false,
}) => {
  return (
    <PaperProvider theme={{ ...lightTheme, dark }}>{children}</PaperProvider>
  );
};

export default MockPaperProvider;
