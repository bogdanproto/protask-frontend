// пример модального окна с кнопкой закрытия
import React, { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import { ModalCloseButton } from '../UniversalModal/UniversalModal.styled';
import { MdClose } from 'react-icons/md';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open modal with close button</button>
      <UniversalModal isOpen={isOpen} onClose={closeModal}>
        <ModalCloseButton onClick={closeModal}>
          <MdClose fill={`${p => p.theme.colors.mainFontColor}`} />
        </ModalCloseButton>
        <h2>Modal Content</h2>
        <h2>Please enter your email</h2>
        <input />
        <button>send</button>
      </UniversalModal>
    </div>
  );
};

export default ModalComponent;
