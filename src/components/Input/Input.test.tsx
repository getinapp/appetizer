import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { PersonAdd } from '@styled-icons/ionicons-solid/PersonAdd';

describe('<Input />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<Input label="Nome completo" />);
    const text = screen.getByText('Nome completo');

    expect(text).toBeInTheDocument();
  });

  it('should be render input with error message', () => {
    renderWithTheme(<Input label="Name" error="Name required" />);
    const text = screen.getByText('Name');
    const error = screen.getByText('Name required');

    expect(text).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('should be render input with helper message', () => {
    renderWithTheme(<Input label="Name" helper="Helper text" />);
    const text = screen.getByText('Name');
    const helper = screen.getByText('Helper text');

    expect(text).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
  });

  it('should be change label color when have error', () => {
    renderWithTheme(<Input label="Name" error="Name required" />);
    const text = screen.getByText('Name');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveStyle({
      color: '#EB7573',
    });
  });

  it('should be change helper color when have helper text', () => {
    renderWithTheme(<Input label="Name" helper="Helper text" />);
    const text = screen.getByText('Helper text');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveStyle({
      color: '#141414',
    });
  });

  it('input should be focussed when user press', async () => {
    const spyOnFocus = jest.fn();
    const { container } = renderWithTheme(
      <Input label="Name" onFocus={spyOnFocus} />,
    );
    const input = container.getElementsByTagName('input')[0];

    fireEvent.focus(input);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onFocus', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input label="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('input should be not focussed when user press onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input label="Name" onBlur={spyOnFocus} />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(<Input label="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('should be accessible by tab', () => {
    renderWithTheme(<Input label="Name" name="test" />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should renders with Icon', () => {
    renderWithTheme(<Input icon={<PersonAdd data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should renders with Icon on the right side', () => {
    renderWithTheme(
      <Input icon={<PersonAdd data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should render label with margin left if have icon', async () => {
    renderWithTheme(
      <Input label="Name" icon={<PersonAdd data-testid="icon" />} />,
    );
    const input = screen.getByRole('textbox', { name: 'Name' });

    const text = screen.getByText('Name');

    fireEvent.focus(input);

    expect(text).toHaveStyle({ marginLeft: '1.5rem' });
    expect(input).toHaveStyle({ width: '100%' });
  });

  it('should render input with max width', async () => {
    renderWithTheme(
      <Input
        label="Name"
        icon={<PersonAdd data-testid="icon" />}
        iconPosition="right"
      />,
    );
    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(input).toHaveStyle({ width: '100%' });
  });
});
