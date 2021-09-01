import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyAwesomeComponent } from '.';

test('MyAwesomeComponent contains correct text', () => {
  render(<MyAwesomeComponent />);
  const text = screen.getByText('Hello Appetizer @getinapp');
  expect(text).toBeInTheDocument();
});
