import React from 'react';
import * as S from './styles';

export type SmallProps = {
  children: React.ReactNode;
};

/**
 * Basic text writing in small size.
 */
export const Small = ({ children }: SmallProps) => (
  <S.Small>{children}</S.Small>
);
