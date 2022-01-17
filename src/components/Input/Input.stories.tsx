import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PersonAdd } from '@styled-icons/ionicons-solid/PersonAdd';

import { InputProps, Input } from '.';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    label: {
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
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
};

export const Disabled: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

Disabled.args = {
  label: 'Full name',
  placeholder: 'Testing',
  required: true,
  disabled: true,
};

export const withError: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

withError.args = {
  label: 'Full name',
  placeholder: 'Testing',
  error: 'Error text',
};

export const withHelper: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

withHelper.args = {
  label: 'Full name',
  placeholder: 'Testing',
  helper: 'This is a helper text',
};

export const withoutPlaceholder: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input {...args} />
  </div>
);

withoutPlaceholder.args = {
  label: 'Address',
};

export const withIcon: Story<InputProps> = (args) => (
  <div>
    <Input {...args} />
    <Input {...args} placeholder="teste" />
  </div>
);

withIcon.args = {
  label: 'Username',
  icon: <PersonAdd size={15} />,
};

export const withCurrencyMask: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input
      {...args}
      placeholder="R$ 0,00"
      mask="R$ price"
      blocks={{
        price: {
          mask: Number,
          padFractionalZeros: true,
          thousandsSeparator: '.',
          radix: ',',
          mapToRadix: ['.'],
        },
      }}
    />
  </div>
);

withCurrencyMask.args = {
  label: 'Currency',
};

export const withCpfCnpjMask: Story<InputProps> = (args) => (
  <div style={{ marginTop: 20 }}>
    <Input
      {...args}
      mask={[
        {
          mask: '000.000.000-00',
        },
        {
          mask: '00.000.000/0000-00',
        },
      ]}
    />
  </div>
);

withCpfCnpjMask.args = {
  label: 'CPF/CNPJ',
};
