import Modal from 'react-modal';
import modalStyles, { ModalCloseButton } from './UniversalModal.styled';
import { useTheme } from 'styled-components';
import { MdClose } from 'react-icons/md';

const UniversalModal = ({ isOpen, onClose, children, content }) => {
  const theme = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        ...modalStyles,
        content: {
          ...modalStyles.content,
          backgroundColor: theme.colors.modalPopupBackgroundColor,
        },
      }}
      ariaHideApp={false}
    >
      <ModalCloseButton onClick={onClose}>
        <MdClose fill={theme.colors.mainFontColor} />
      </ModalCloseButton>
      {children}
      {content}
    </Modal>
  );
};

export default UniversalModal;
