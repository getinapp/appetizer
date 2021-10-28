import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputProps, Input } from '.';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    helper: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Default: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Default.args = {
  title: 'Full name',
  placeholder: 'Testing',
};

export const withError: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

withError.args = {
  title: 'Full name',
  placeholder: 'Testing',
  error: 'Erro label',
};

export const withHelper: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

withHelper.args = {
  title: 'Full name',
  placeholder: 'Testing',
  helper: 'This is a helper text',
};
