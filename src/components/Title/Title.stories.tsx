import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Title, TitleProps } from '.';

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    icon: {
      type: '',
    },
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<TitleProps> = (args) => <Title {...args} />;

Default.args = {
  children: 'Hello Get In',
};
