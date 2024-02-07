// пример модального окна с кнопкой закрытия
import React, { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import { ModalTitle, ModalCloseButton } from './ModalComponent.styled';
import { EditProfile } from 'components/EditProfile';

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
        <EditProfile/>
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
