import styled, { css } from 'styled-components';
import { LogoProps } from '.';

const wrapperModifiers = {
  small: () => css`
    svg {
      height: 3.3rem;
      width: 8rem;
    }
  `,
  normal: () => css`
    svg {
      height: 4rem;
      width: 10rem;
    }
  `,
  large: () => css`
    svg {
      height: 6rem;
      width: 15rem;
    }
  `,
};

export const Wrapper = styled.div<Pick<LogoProps, 'size'>>`
  padding-top: 4px;
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}

  &:hover {
    cursor: pointer;
  }
`;
