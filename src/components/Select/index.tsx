import React, { useState, SelectHTMLAttributes } from 'react';
import { Small } from '../../';
import DefaultSelect, { Theme } from 'react-select';
import * as S from './styles';
import { useTheme } from 'styled-components';

export type OptionProps = {
  label: string;
  value: string;
};

export type SelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  error?: string;
  helper?: string;
  noOptionsText?: string;
  options?: Array<OptionProps>;
} & SelectHTMLAttributes<HTMLInputElement>;

export const Select = ({
  name,
  label,
  placeholder = '',
  isClearable = false,
  isSearchable = false,
  error,
  helper,
  options,
  onFocus,
  onBlur,
  noOptionsText = 'Nenhuma opção encontrada',
}: SelectProps) => {
  const theme = useTheme();

  const [active, setActive] = useState(!!placeholder);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
    setActive(true);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setActive(e.target?.value.length !== 0 || !!placeholder);
  };

  const themed = (selectTheme: Theme) => ({
    ...selectTheme,
    borderRadius: 8,
    colors: {
      ...selectTheme.colors,
      primary: theme.colors.black,
    },
  });

  return (
    <S.Container>
      <S.Label
        active={active}
        error={!!error}
        htmlFor={name}
        aria-label={label}
      >
        {label}
      </S.Label>

      <DefaultSelect
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        isClearable={isClearable}
        noOptionsMessage={() => <Small>{noOptionsText}</Small>}
        isSearchable={isSearchable}
        options={options}
        name={name}
        aria-label={label}
        styles={{
          menu: (provided) => ({
            ...provided,
            boxShadow: '0px 4px 12px rgba(20, 20, 20, 0.2)',
            padding: 5,
            margin: 0,
          }),
          placeholder: (base, state) => ({
            ...base,
            fontSize: '1.25rem',
            color: state.isFocused
              ? theme.colors.black
              : theme.colors.placeholder,
          }),
          control: (base) => ({
            ...base,
            outline: 'none',
            boxShadow: 'none',
            border: `1px solid ${
              error ? theme.colors.error : theme.colors.black
            }`,
          }),
          option: (provided, state) => ({
            ...provided,
            ':hover': {
              color: theme.colors.black,
              cursor: 'pointer',
            },
            ':active': {
              backgroundColor: 'none',
            },
            backgroundColor: 'none',
            color: state.isSelected
              ? theme.colors.black
              : theme.colors.placeholder,
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
        }}
        theme={themed}
      />

      {error && <S.Error>{error}</S.Error>}
      {helper && <S.Helper active={active}>{helper}</S.Helper>}
    </S.Container>
  );
};
