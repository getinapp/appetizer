import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Loading from '../Loading';
import * as S from './styles';

type ButtonSizesType = 'small' | 'regular' | 'large';

type ButtonVariantsType =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'outline'
  | 'outline-white';

export type ButtonProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactElement | string;
  /**
   * The variant of the button. It supports just five type of variants: 'primary', 'secondary', 'white', 'outline' and 'outline-white'.
   */
  variant?: ButtonVariantsType;
  /**
   * How large should the button be?
   */
  size?: ButtonSizesType;
  /**
   * In the case of the button, have the maximum size of the container
   */
  isFullWidth?: boolean;
  /**
   * Set the loading status of button
   */
  loading?: boolean;
  /**
   * Change component to another element type
   */
  as?: React.ElementType;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

/**
 * API documentation for the React Button component. Learn about the available props, and the CSS API.
 */
export const Button = ({
  children,
  variant = 'primary',
  isFullWidth = false,
  size = 'regular',
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loading />}
      {!!children && <span>{children}</span>}
    </S.Container>
  );
};
