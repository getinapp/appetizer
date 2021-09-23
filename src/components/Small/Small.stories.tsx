import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Small, { SmallProps } from '.';

export default {
  title: 'Typography/Small',
  component: Small,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<SmallProps> = (args) => <Small {...args} />;

Default.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa facere molestiae ut similique blanditiis error tempore itaque dolore. Consequuntur doloremque aspernatur, saepe sit voluptatem mollitia minus facere commodiet?',
};
