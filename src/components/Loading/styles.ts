import styled, { css, keyframes } from 'styled-components';
import { ImSpinner8 } from 'react-icons/im';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(ImSpinner8)`
  ${({ theme, color }) => css`
    color: ${color ? color : theme.colors.primary};
    margin-right: ${theme.spacings.xxsmall};
    animation: ${rotate} 0.5s linear infinite;
  `}
`;
