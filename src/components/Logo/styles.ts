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
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
