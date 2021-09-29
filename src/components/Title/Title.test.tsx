import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Title } from '.';

describe('<Title />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Title>Testing Component</Title>);

    expect(
      screen.getByRole('heading', { name: /Testing/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '3.2rem',
    });
  });

  it('should render the Title with h2 size', () => {
    renderWithTheme(<Title level={2}>Testing Component</Title>);

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '2.4rem',
    });
  });

  it('should render the Title with h3 size', () => {
    renderWithTheme(<Title level={3}>Testing Component</Title>);

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '2rem',
    });
  });

  it('should render the Title with h4 size', () => {
    renderWithTheme(<Title level={4}>Testing Component</Title>);

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '1.8rem',
    });
  });

  it('should render the Title with h5 size', () => {
    renderWithTheme(<Title level={5}>Testing Component</Title>);

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '1.6rem',
    });
  });

  it('should render the Title with h6 size', () => {
    renderWithTheme(<Title level={6}>Testing Component</Title>);

    expect(screen.getByRole('heading', { name: /Testing/i })).toHaveStyle({
      'font-size': '1.4rem',
    });
  });
});
