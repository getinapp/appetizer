import React from 'react';
import * as S from './styles';

export type TitleProps = {
  /**
   * The sizes of title, each number respect heading styles
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * An optional icon in prefix
   */
  children: React.ReactNode | string;
};

/**
 * Basic text writing with heading style.
 */
export const Title = ({ children, level = 1, ...props }: TitleProps) => {
  return (
    <S.Title level={level} {...props}>
      {children}
    </S.Title>
  );
};
