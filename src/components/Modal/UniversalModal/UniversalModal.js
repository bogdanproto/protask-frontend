import React from 'react';
import Modal from 'react-modal';
import modalStyles from './UniversalModal.styled';
import { useTheme } from 'styled-components';

const UniversalModal = ({ isOpen, onClose, children }) => {
  const theme = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        ...modalStyles,
        content: {
          ...modalStyles.content,
          backgroundColor: theme.colors.background,
        },
      }}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default UniversalModal;
