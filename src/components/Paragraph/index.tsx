import React from 'react';
import * as S from './styles';

export type ParagraphProps = {
  /**
   * Content of paragraph
   */
  children: React.ReactNode | string;
  /**
   * The size of paragraph.
   */
  type?: 'normal' | 'lead';
};

/**
 * Basic text writing, with paragraph you can select by two sizes (normal/lead).
 */
const Paragraph = ({ type = 'normal', children }: ParagraphProps) => (
  <S.Paragraph role="paragraph" type={type}>
    {children}
  </S.Paragraph>
);

export default Paragraph;
