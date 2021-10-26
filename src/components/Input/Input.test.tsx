import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Input />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<Input title="Nome completo" />);
    const text = screen.getByText('Nome completo');

    expect(text).toBeInTheDocument();
  });

  it('should be render input with error message', () => {
    renderWithTheme(<Input title="Name" error="Name required" />);
    const text = screen.getByText('Name');
    const error = screen.getByText('Name required');

    expect(text).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('should be change label color when have error', () => {
    renderWithTheme(<Input title="Name" error="Name required" />);
    const text = screen.getByText('Name');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveStyle({
      color: '#EB7573',
    });
  });

  it('input should be focussed when user press', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input title="Name" onFocus={spyOnFocus} />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());

    expect(text).toHaveStyle({
      border: '1px solid black',
    });
  });

  it('input should be not call function when not pass onFocus', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input title="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('input should be not focussed when user press onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input title="Name" onBlur={spyOnFocus} />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input title="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('should be accessible by tab', () => {
    renderWithTheme(<Input title="Name" name="test" />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
