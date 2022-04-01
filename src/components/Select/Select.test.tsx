import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { Select } from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

const options = [{ label: 'label', value: 'value' }];

describe('<Select />', () => {
  it('renders select component successfully', () => {
    renderWithTheme(
      <Select
        label="Hello Appetizer Select"
        name="testing"
        options={options}
      />,
    );
    const text = screen.getByText('Hello Appetizer Select');

    expect(text).toBeInTheDocument();
  });

  // it('renders select component with no options and check text', () => {
  //   const { debug } = renderWithTheme(<Select label="Name" name="Name" />);

  //   const input = screen.getByRole('combobox', { name: 'Name' });

  //   fireEvent.click(input);

  //   debug();

  //   const text = screen.getByText('Nenhuma opção encontrada');
  //   expect(text).toBeInTheDocument();
  // });

  it('should be render input with error message', () => {
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        error="Name required"
        placeholder="name"
        options={options}
      />,
    );
    const text = screen.getByText('Name');
    const error = screen.getByText('Name required');

    expect(text).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('should be render input with helper message', () => {
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        title="Name"
        helper="Helper text"
        options={options}
      />,
    );
    const text = screen.getByText('Name');
    const helper = screen.getByText('Helper text');

    expect(text).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
  });

  it('should be change label color when have error', () => {
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        title="Name"
        error="Name required"
        options={options}
      />,
    );
    const text = screen.getByText('Name');

    const input = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveStyle({
      color: '#EB7573',
    });
  });

  it('should be change helper color when have helper text', () => {
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        title="Name"
        helper="Helper text"
        options={options}
      />,
    );
    const text = screen.getByText('Helper text');

    const input = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveStyle({
      color: '#141414',
    });
  });

  it('input should be focussed when user press', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        title="Name"
        onFocus={spyOnFocus}
        options={options}
      />,
    );

    const text = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());

    expect(text).toHaveStyle({
      border: '0',
    });
  });

  it('input should be not call function when not pass onFocus', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(
      <Select label="Name" name="testing" title="Name" options={options} />,
    );

    const text = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('input should be not focussed when user press onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(
      <Select
        label="Name"
        name="testing"
        title="Name"
        onBlur={spyOnFocus}
        options={options}
      />,
    );

    const text = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onBlur', async () => {
    const spyOnFocus = jest.fn();
    renderWithTheme(
      <Select label="Name" name="testing" title="Name" options={options} />,
    );

    const text = screen.getByRole('combobox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('should be accessible by tab', () => {
    renderWithTheme(
      <Select label="Name" name="testing" title="Name" options={options} />,
    );

    const input = screen.getByRole('combobox', { name: 'Name' });
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
