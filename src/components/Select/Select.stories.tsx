import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectProps, Select } from '.';

export default {
  title: 'Forms/Select',
  component: Select,
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

const options = [
  { label: 'Goku', value: 'goku' },
  { label: 'Gohan', value: 'gohan' },
  { label: 'Goten', value: 'goten' },
  { label: 'Vegeta', value: 'vegeta' },
];

export const Default: Story<SelectProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Select {...args} options={options} />
  </div>
);

Default.args = {
  name: 'default-select',
  placeholder: 'Default Placeholder',
  label: 'Default Label',
};

export const withError: Story<SelectProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Select {...args} options={options} />
  </div>
);

withError.args = {
  name: 'with-error-select',
  placeholder: 'With Error Placeholder',
  label: 'With Error Label',
  error: 'Error message',
};

export const withHelper: Story<SelectProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Select {...args} options={options} />
  </div>
);

withHelper.args = {
  name: 'with-helper-select',
  placeholder: 'With Helper Placeholder',
  label: 'With Helper Label',
  helper: 'Helper message',
};

export const noOptions: Story<SelectProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Select {...args} />
  </div>
);

noOptions.args = {
  name: 'with-helper-select',
  placeholder: 'With Helper Placeholder',
  label: 'With Helper Label',
  helper: 'Helper message',
};
