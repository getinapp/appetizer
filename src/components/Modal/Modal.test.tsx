import React from 'react';
import ReactModal from 'react-modal';
import { screen } from '@testing-library/react';
import { Modal } from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import { Logo } from '../Logo';

ReactModal.setAppElement('*');

describe('<Modal />', () => {
  it('renders modal opened', () => {
    renderWithTheme(<Modal title="Hello Appetizer" isOpen={true} />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });

  it('renders modal closed', () => {
    const { container } = renderWithTheme(<Modal title="Hello Appetizer" />);

    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('should render modal with paragraph', () => {
    renderWithTheme(<Modal title={<Logo />} isOpen={true} />);
    const text = screen.getByLabelText(/Get In/i);

    expect(text).toBeInTheDocument();
  });

  it('should render modal with custom width', () => {
    renderWithTheme(
      <Modal title="Hello Appetizer" isOpen={true} width="90%" />,
    );
    const text = screen.getByText('Hello Appetizer');

    expect(text.parentElement?.parentElement).toHaveStyle({
      width: '90%',
    });
  });
});
