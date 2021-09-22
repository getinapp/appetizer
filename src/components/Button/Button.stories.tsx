import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonProps, Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'white', 'outline', 'outline-white'],
      control: { type: 'radio' },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Label',
};
