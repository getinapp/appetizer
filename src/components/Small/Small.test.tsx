import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Small } from '.';

describe('<Small />', () => {
  it('should render the small with the default size', () => {
    renderWithTheme(<Small>Testing Paragraph</Small>);

    expect(screen.getByText(/Testing Paragraph/i)).toBeInTheDocument();

    expect(screen.getByText(/Testing Paragraph/i)).toHaveStyle({
      'font-size': '1.2rem',
    });
  });
});
