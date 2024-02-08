// ModalStyles.js
import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: absolute;
`;

export const ModalTitle = styled.h2`
  color: #333;
`;

export const ModalContent = styled.p`
  color: #666;
`;

// export const ModalCloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   color: #666;
//   font-size: 16px;
//   cursor: pointer;
//   z-index: 1001;
// `;
