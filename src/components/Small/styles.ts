import styled, { css } from 'styled-components';

export const Small = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
