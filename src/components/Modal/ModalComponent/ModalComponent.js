// пример модального окна с кнопкой закрытия
import React, { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import { ModalTitle, ModalCloseButton } from './ModalComponent.styled';

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
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <ModalTitle>Modal Content</ModalTitle>
        <h2>Please enter your email</h2>
        <input />
        <button>send</button>
      </UniversalModal>
    </div>
  );
};

export default ModalComponent;

// import React, { useState } from 'react';
// import UniversalModal from '../UniversalModal/UniversalModal';

// const ModalComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <button onClick={openModal}>Open Modal</button>
//       <UniversalModal isOpen={isOpen} onClose={closeModal}>
//         <h2>Modal Content</h2>
//         <p>This is a sample modal window.</p>
//       </UniversalModal>
//     </div>
//   );
// };

// export default ModalComponent;
