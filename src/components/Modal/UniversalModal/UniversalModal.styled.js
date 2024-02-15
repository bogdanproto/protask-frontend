// ModalStyles.js

import styled from 'styled-components';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: `${p => p.theme.colors.modalPopupBackgroundColor}`,
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: 'fit-content',
    height: 'fit-content',
    border: `${p => p.theme.colors.modalPopupBackgroundColor}`,
  },
};

export default modalStyles;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  z-index: 1001;
`;
