import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import theme from 'styles/themes/light';

type AppetizerProviderProps = {
  children: React.ReactNode;
};

export const AppetizerProvider = ({ children }: AppetizerProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
