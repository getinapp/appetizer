import styled, { css, DefaultTheme } from 'styled-components';
import { ParagraphProps } from '.';

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  lead: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
};

export const Paragraph = styled.p<ParagraphProps>`
  ${({ theme, type }) => css`
    ${!!type && wrapperModifiers[type](theme)}
    font-weight: normal;
  `}
`;
