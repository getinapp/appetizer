import React from 'react';
import { screen } from '@testing-library/react';
import { AppetizerProvider } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<AppetizerProvider />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<AppetizerProvider>Hello Appetizer</AppetizerProvider>);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});
