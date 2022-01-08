import styled, { css } from 'styled-components';
import DefaultSelect from 'react-select';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;

    svg {
      color: ${theme.colors.black};
    }
  `}
`;

export const Label = styled.label<{ active: boolean; error: boolean }>`
  position: absolute;
  padding: 0 0.35rem;

  ${({ theme, error, active }) => css`
    color: ${error && active ? theme.colors.error : theme.colors.black};
  `}
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  cursor: text;
  pointer-events: none;
  transform: translate3d(0, -45.5%, 0) scale(0.9);

  background: white;
  margin-left: 15px;
  font-size: 1.3rem;
  z-index: 10;
`;

export const Select = styled(DefaultSelect);

export const Error = styled.p`
  font-weight: normal;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.05rem;

  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;

export const Helper = styled.p<{ active: boolean }>`
  font-weight: normal;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;

  ${({ theme, active }) => css`
    color: ${active ? theme.colors.black : theme.colors.buttonOutlineBorder};
  `}
`;
