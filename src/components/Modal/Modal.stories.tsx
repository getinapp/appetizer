import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ModalProps, Modal } from '.';
import { Button } from '../Button';
import { Logo } from '../Logo';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: 'string',
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Default: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={{
        background: 'white',
        width: '100%',
        height: '95rem',
      }}
    >
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <span>content</span>
      </Modal>
    </div>
  );
};

Default.args = {
  title: 'Hello Appetizer',
};

export const WithLogo: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={{
        background: 'white',
        width: '100%',
        height: '95rem',
      }}
    >
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        title={<Logo size="small" />}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <span>content</span>
      </Modal>
    </div>
  );
};

WithLogo.args = {
  title: 'Hello Appetizer',
};
