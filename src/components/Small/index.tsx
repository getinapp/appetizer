import React from 'react';
import * as S from './styles';

export type SmallProps = {
  children: React.ReactNode;
};

/**
 * Basic text writing in small size.
 */
const Small = ({ children }: SmallProps) => <S.Small>{children}</S.Small>;

export default Small;
