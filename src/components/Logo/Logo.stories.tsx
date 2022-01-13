import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo } from '.';

export default {
  title: 'Utils/Logo',
  component: Logo,
  argTypes: {
    size: {
      options: ['small', 'normal', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

export const Default: Story = (args) => <Logo size="large" {...args} />;

Default.args = {
  size: 'small',
};

export const White: Story = (args) => <Logo {...args} />;

White.args = {
  size: 'small',
  color: 'white',
};
