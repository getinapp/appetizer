import ReactModal from 'react-modal';
import { Title as DefaultTitle } from '../Title';
import styled, { css } from 'styled-components';
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close';

export const Modal = styled(ReactModal)<{ width?: string }>`
  padding: 3.5rem 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 35rem;

  outline: none;

  ${({ theme, width }) => css`
    background-color: ${theme.colors.zeroContrast};

    border-radius: calc(${theme.border.radius.large} * 2);
    ${!!width &&
    css`
      width: ${width};
    `}
  `}
`;

export const Close = styled(CloseIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

export const Title = styled(DefaultTitle)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`;
