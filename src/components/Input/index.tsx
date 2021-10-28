import React, { useState, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type InputProps = {
  error?: string;
  helper?: string;
  active?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  name,
  title,
  error,
  helper,
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  const [active, setActive] = useState(!!props.placeholder);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
    setActive(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setActive(e.target?.value.length !== 0 || !!props.placeholder);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Label active={active} htmlFor={name} error={!!error}>
          {title}
        </S.Label>
        <S.Input
          {...props}
          title={title}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          active={active}
          error={error}
          name={name}
        />
      </S.InputContainer>
      {error && <S.Error>{error}</S.Error>}
      {helper && <S.Helper active={active}>{helper}</S.Helper>}
    </S.Container>
  );
};
