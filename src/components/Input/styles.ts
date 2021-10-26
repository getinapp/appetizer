import styled, { css } from 'styled-components';
import { InputProps } from '.';

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-size: inherit;
`;

export const Label = styled.label<{ active: boolean; error: boolean }>`
  position: absolute;

  ${({ theme, error, active }) => css`
    color: ${error && active ? theme.colors.error : theme.colors.black};
  `}
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  cursor: text;
  pointer-events: none;
  transform: ${({ active }) =>
    active ? 'translate3d(0, -92.5%, 0) scale(0.9)' : 'none'};

  background: white;
  margin-left: 15px;
  font-size: 1.3rem;
`;

export const Input = styled.input<InputProps>`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  padding-top: 1rem;
  padding-left: 1.3rem;
  outline: none;

  ${({ theme, active, error }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    border: 1px solid ${active ? 'black' : theme.colors.placeholder};

    ${error &&
    css`
      border: 1px solid ${theme.colors.error};
    `}

    &::placeholder {
      color: ${theme.colors.placeholder};
      opacity: ${active ? 1 : 0};
      transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  `}
`;

export const Error = styled.p`
  font-weight: normal;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.05rem;

  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
