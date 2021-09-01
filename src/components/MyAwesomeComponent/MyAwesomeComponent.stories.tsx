import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MyAwesomeComponent } from '.';

export default {
  title: 'MyAwesomeComponent',
  component: MyAwesomeComponent,
} as Meta;

export const Default: Story = () => <MyAwesomeComponent />;
