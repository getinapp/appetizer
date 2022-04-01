import React from 'react';
import { Props } from 'react-modal';

import * as S from './styles';

export type ModalProps = {
  title: React.ReactNode | string;
  width?: string;
  isOpen?: boolean;
} & Omit<Props, 'isOpen'>;

export const Modal = ({
  title,
  isOpen = false,
  width,
  ...props
}: ModalProps) => {
  return (
    <S.Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      width={width}
      {...props}
      data-testid="modal-test-id"
    >
      <S.Header>
        {typeof title === 'string' ? <S.Title>{title}</S.Title> : title}
        <S.Close size={20} onClick={props.onRequestClose} />
      </S.Header>
      {props.children}
    </S.Modal>
  );
};
