import React from 'react';
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
   * The variant of the button. It supports just two type of variants: 'primary' and 'secondary'.
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
   * Optional click handler
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Disabled state of button
   */
  disabled?: boolean;
  /**
   * Set the loading status of button
   */
  loading?: boolean;
} & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

/**
 * API documentation for the React Button component. Learn about the available props, and the CSS API.
 */
export const Button = ({
  children,
  variant = 'primary',
  isFullWidth = false,
  size = 'regular',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Container
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </S.Container>
  );
};
