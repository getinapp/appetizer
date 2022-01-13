import styled, { css, keyframes } from 'styled-components';
import { SpinnerIos } from '@styled-icons/fluentui-system-filled/SpinnerIos';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(SpinnerIos)`
  ${({ theme, color }) => css`
    color: ${color ? color : theme.colors.primary};
    margin-right: ${theme.spacings.xxsmall};
    animation: ${rotate} 0.5s linear infinite;
  `}
`;
