// Пример модального окна без кнопки закрытия
import React, { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import { ModalTitle } from '../ModalComponent/ModalComponent.styled';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open modal without close button</button>
      <UniversalModal isOpen={isOpen} onClose={closeModal}>
        <ModalTitle>Modal Content</ModalTitle>
        <h2>Please enter your email</h2>
        <input />
        <button>send</button>
      </UniversalModal>
    </div>
  );
};

export default Test;
