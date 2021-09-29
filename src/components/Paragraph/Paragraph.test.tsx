import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Paragraph } from '.';

describe('<Paragraph />', () => {
  it('should render the paragraph with the default size', () => {
    renderWithTheme(<Paragraph>Testing Paragraph</Paragraph>);

    expect(screen.getByText(/Testing Paragraph/i)).toBeInTheDocument();

    expect(screen.getByText(/Testing Paragraph/i)).toHaveStyle({
      'font-size': '1.4rem',
    });
  });

  it('should render the paragraph with the lead size', () => {
    renderWithTheme(<Paragraph type="lead">Testing Paragraph</Paragraph>);

    expect(screen.getByText(/Testing Paragraph/i)).toBeInTheDocument();

    expect(screen.getByText(/Testing Paragraph/i)).toHaveStyle({
      'font-size': '1.8rem',
    });
  });
});
