import React from 'react';
import Modal from 'react-modal';
// import { Modals } from './UM.style';
import modalStyles from './UniversalModal.style';

const UniversalModal = ({ isOpen, onClose, children }) => {
  return (    
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      {children}
      {/* <button onClick={onClose}>Close Modal</button> */}
    </Modal>
  );
};

export default UniversalModal;
