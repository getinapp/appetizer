import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loading, { LoadingProps } from '.';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

export const Default: Story<LoadingProps> = () => <Loading />;
