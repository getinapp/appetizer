import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import uniqid from 'uniqid';

import * as S from './styles';

export type InputProps = {
  error?: string;
  helper?: string;
  label?: string;
  mask?: unknown;
  blocks?: unknown;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  id,
  name,
  label,
  icon,
  iconPosition = 'left',
  error,
  helper,
  onFocus,
  onBlur,
  required,
  disabled,
  ...props
}: InputProps) => {
  const identifier = id || uniqid('appetizer-input__');
  const [active, setActive] = useState(!!props.placeholder);
  const hasValue = !!props.value || !!props.defaultValue;

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
    setActive(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setActive(e.target?.value.length !== 0 || !!props.placeholder);
  };

  useEffect(() => {
    if (hasValue) setActive(true);
  }, [hasValue]);

  return (
    <S.Container>
      <S.InputContainer>
        {!!label && !disabled && (
          <S.Label
            active={active}
            htmlFor={name}
            error={!!error}
            icon={!!icon}
            iconPosition={iconPosition}
            required={!!required}
          >
            {label}
          </S.Label>
        )}

        <S.InputWrapper
          icon={!!icon}
          iconPosition={iconPosition}
          error={!!error}
          active={active}
          disabled={!!disabled}
        >
          {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

          <S.Input
            id={identifier}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            name={name}
            title={label}
            disabled={disabled}
            {...props}
          />
        </S.InputWrapper>
      </S.InputContainer>
      {error && <S.Error>{error}</S.Error>}
      {helper && <S.Helper active={active}>{helper}</S.Helper>}
    </S.Container>
  );
};
