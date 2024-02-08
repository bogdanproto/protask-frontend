import React from 'react';
import Modal from 'react-modal';
import modalStyles from './UniversalModal.styled';

const UniversalModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default UniversalModal;
