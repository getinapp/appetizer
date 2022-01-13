import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/themes/light';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', '*'],
    },
  },
};
