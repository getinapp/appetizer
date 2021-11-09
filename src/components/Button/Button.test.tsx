import React from 'react';
import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Button />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<Button>Hello Appetizer</Button>);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });

  it('should be rendered a small Button', () => {
    renderWithTheme(<Button size="small">Hello Appetizer</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      height: '2.8rem',
    });
  });

  it('should be rendered a large Button', () => {
    renderWithTheme(
      <Button variant="primary" size="large">
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      height: '4.8rem',
      background: '#DD4F50',
    });
  });

  it('should be render a full width Button', () => {
    renderWithTheme(
      <Button variant="primary" size="large" isFullWidth>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      width: '100%',
    });
  });

  it('should be render a disabled Button', () => {
    renderWithTheme(
      <Button variant="primary" size="large" disabled>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      cursor: 'not-allowed',
    });
  });

  it('should be render with loading', () => {
    renderWithTheme(
      <Button variant="white" size="large" loading>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByTestId('loading-indicator');

    expect(button).toHaveStyle({
      color: '#DD4F50',
    });
  });

  it('should be render a secondary Button', () => {
    renderWithTheme(
      <Button variant="secondary" size="large" disabled>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      height: '4.8rem',
      background: '#3861BA',
      color: '#F7F5F5',
    });
  });

  it('should be render a white Button', () => {
    renderWithTheme(
      <Button variant="white" size="large" disabled>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      height: '4.8rem',
      background: '#F7F5F5',
      color: '#141414',
    });
  });

  it('should be render a outline Button', () => {
    renderWithTheme(
      <Button variant="outline" size="large" disabled>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      height: '4.8rem',
      background: 'transparent',
      color: '#141414',
      border: '0.1rem solid #676666',
    });
  });

  it('should be render a outline-white Button', () => {
    renderWithTheme(
      <Button variant="outline-white" size="large" disabled>
        Hello Appetizer
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      height: '4.8rem',
      background: 'transparent',
      color: '#F7F5F5',
      border: '0.1rem solid #F7F5F5',
    });
  });
});
