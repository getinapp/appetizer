import React from 'react';
import * as S from './styles';

export type LoadingProps = {
  /**
   * How large should the loading be?
   */
  size?: number | string;
  /**
   * Color of the indicator
   */
  color?: string;
};

const Loading = ({ size = 20, color }: LoadingProps) => (
  <S.Loading size={size} color={color} data-testid="loading-indicator" />
);

export default Loading;
