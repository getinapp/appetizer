import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo svg', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Get In/i).parentElement).toBeInTheDocument();
  });

  it('should render the logo svg with small size', () => {
    renderWithTheme(<Logo size="small" />);
    expect(screen.getByLabelText(/Get In/i)).toHaveStyle({
      height: '3.3rem',
      width: '8rem',
    });
  });

  it('should render the logo svg with default size', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Get In/i)).toHaveStyle({
      height: '4rem',
      width: '10rem',
    });
  });

  it('should render the logo svg with large size', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Get In/i)).toHaveStyle({
      height: '6rem',
      width: '15rem',
    });
  });

  it('should render the logo svg with color white', () => {
    renderWithTheme(<Logo size="large" color="white" />);

    expect(screen.getByLabelText(/Get In/i).parentElement).toBeInTheDocument();
  });
});
