import React from 'react';
import Modal from 'react-modal';
import modalStyles, { ModalCloseButton } from './UniversalModal.styled';
import styled from 'styled-components';

const UniversalModal = ({ isOpen, onClose, children, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      ariaHideApp={false}
    >
      <TopTitleModal>
        {title}
        <ModalCloseButton onClick={onClose}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L4.5 13.5"
              stroke="#161616"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 4.5L13.5 13.5"
              stroke="#161616"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ModalCloseButton>
      </TopTitleModal>
      {children}
    </Modal>
  );
};

export const TopTitleModal = styled.div`
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #161616;
`;

export default UniversalModal;
