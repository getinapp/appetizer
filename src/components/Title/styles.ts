import styled, { css, DefaultTheme } from 'styled-components';
import { TitleProps } from '.';

type WrapperProps = Pick<TitleProps, 'level'>;

const wrapperModifiers = {
  1: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.huge};
  `,
  2: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
  `,
  3: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `,
  4: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `,
  5: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `,
  6: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: normal;
  `,
};

export const Title = styled.h1.attrs<WrapperProps>(({ level }) => ({
  as: `h${level}`,
}))<WrapperProps>`
  ${({ theme, level }) => css`
    ${!!level && wrapperModifiers[level](theme)};
    color: ${theme.colors.dark};
    justify-content: center;
    align-items: center;
  `}
`;
