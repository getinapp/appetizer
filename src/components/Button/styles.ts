import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { lighten } from 'polished';

import { ButtonProps } from '.';

type WrapperModifiersType = {
  [key: string]: (theme: DefaultTheme) => FlattenSimpleInterpolation;
};

const wrapperModifiers: WrapperModifiersType = {
  /**
   * Button Sizes
   */
  small: (theme: DefaultTheme) => css`
    height: 2.8rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.6rem 1rem;

    border-radius: calc(${theme.border.radius.medium} + 0.2);
  `,
  regular: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: 1rem 1.5rem;
  `,
  large: (theme: DefaultTheme) => css`
    height: 4.8rem;
    font-size: ${theme.font.sizes.large};
    padding: 1.2rem 1.8rem;
  `,
  /**
   * Button Sizes
   */

  /**
   * Button Variants
   */
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.error};
    }

    &:disabled {
      background-color: ${lighten('0.1', theme.colors.primary)};
    }

    svg {
      color: ${theme.colors.white};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.secondaryLight};
    }

    &:disabled {
      background-color: ${lighten('0.1', theme.colors.secondary)};
    }

    svg {
      color: ${theme.colors.white};
    }
  `,
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    svg {
      color: ${theme.colors.primary};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.black};
    border: 0.1rem solid ${theme.colors.buttonOutlineBorder};
  `,
  'outline-white': (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.white};

    svg {
      color: ${theme.colors.white};
    }
  `,
  /**
   * Button Variants
   */

  fullWidth: () =>
    css`
      width: 100%;
    `,
  disabled: () =>
    css`
      &:disabled {
        cursor: not-allowed;
      }
    `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, size, isFullWidth, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    border-radius: ${theme.border.radius.large};
    text-decoration: none;
    text-align: center;
    span {
      font-family: ${theme.font.family};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!variant && wrapperModifiers[variant](theme)}
    ${!!isFullWidth && wrapperModifiers.fullWidth(theme)}
    ${!!disabled && wrapperModifiers.disabled(theme)}
  `}
`;
