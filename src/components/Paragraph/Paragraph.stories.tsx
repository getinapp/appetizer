import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Paragraph, ParagraphProps } from '.';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

Default.args = {
  type: 'normal',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa facere molestiae ut similique blanditiis error tempore itaque dolore. Consequuntur doloremque aspernatur, saepe sit voluptatem mollitia minus facere commodiet?',
};

export const Lead: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

Lead.args = {
  type: 'lead',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa facere molestiae ut similique blanditiis error tempore itaque dolore. Consequuntur doloremque aspernatur, saepe sit voluptatem mollitia minus facere commodiet?',
};
