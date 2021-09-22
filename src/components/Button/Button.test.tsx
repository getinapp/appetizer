import React from 'react';
import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

test('renders component successfully', () => {
  renderWithTheme(<Button>Hello Appetizer</Button>);
  const text = screen.getByText('Hello Appetizer');

  expect(text).toBeInTheDocument();
});
