import styled, { css } from 'styled-components';
import { IMaskInput } from 'react-imask';

import { InputProps } from '.';

type StyleInputProps = {
  active: boolean;
  error: boolean;
  required: boolean;
  icon: boolean;
  disabled: boolean;
  iconPosition: 'right' | 'left';
};

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-size: inherit;
  margin: 0.75rem 0;
`;

export const Label = styled.label<Omit<StyleInputProps, 'disabled'>>`
  position: absolute;
  padding: ${({ active }) => (active ? '0 0.4rem' : '0')};

  ${({ theme, error, active, required }) => css`
    color: ${!!error && active ? theme.colors.error : theme.colors.black};
    font-size: ${active ? theme.font.sizes.xsmall : theme.font.sizes.normal};
    border-radius: ${theme.border.radius.large};

    ${required &&
    css`
      &:before {
        content: '* ';
        color: ${theme.colors.primary};
      }
    `}
  `}
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  cursor: text;
  pointer-events: none;
  transform: ${({ active }) =>
    active ? 'translate3d(0, -110%, 0) scale(1)' : 'none'};

  background: white;

  margin-left: ${({ active, icon, iconPosition }) =>
    active ? '1.5rem' : icon && iconPosition === 'left' ? '4.1rem' : '1.5rem'};
`;

export const InputWrapper = styled.div<
  Pick<
    StyleInputProps,
    'active' | 'error' | 'disabled' | 'icon' | 'iconPosition'
  >
>`
  ${({ theme, icon, iconPosition, active, error, disabled }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${active ? theme.colors.black : theme.colors.placeholder};
    border-radius: ${theme.border.radius.large};
    ${error &&
    css`
      border: 1px solid ${theme.colors.error};
    `}

    ${disabled &&
    css`
      border: 1px solid ${theme.colors.disabled};

      background: ${theme.colors.lowContrast};
      svg {
        color: ${theme.colors.placeholder};
      }
    `}

    > input {
      padding-left: 1.5rem;

      ${icon &&
      css`
        padding-left: ${iconPosition === 'right' ? '1.75rem' : '1rem'};
      `}
    }
  `}
`;

export const Input = styled(IMaskInput)<InputProps>`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding: 0.7rem 1rem;
  padding-top: 1rem;
  padding-left: 1.3rem;
  outline: none;

  ${({ theme, disabled }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    border: none;
    width: 100%;
    border-radius: ${theme.border.radius.large};

    ${disabled &&
    css`
      &:hover {
        cursor: not-allowed;
      }
    `}

    &::placeholder {
      color: ${theme.colors.placeholder};
      transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
  `}
`;

export const Icon = styled.div<{ iconPosition?: 'left' | 'right' }>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.black};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      height: 100%;
      margin-left: 1.5rem;
      margin-right: ${iconPosition === 'right' ? '1.5rem' : 0};
    }
  `}
`;

export const Error = styled.p`
  font-weight: normal;
  margin-left: 0.5rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.error};
  `}
`;

export const Helper = styled.p<{ active: boolean }>`
  font-weight: normal;
  margin-left: 0.5rem;

  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${active ? theme.colors.black : theme.colors.buttonOutlineBorder};
  `}
`;
