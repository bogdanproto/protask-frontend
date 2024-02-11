import { CardForm } from 'components/CardForm/CardForm';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';
import { useModal } from 'hooks/useModal';

export const CardCreator = ({ columnId }) => {
  const { isOpen, close, toggle } = useModal();
  return (
    <>
      <AddColumnCardButton title="Add another card" onClick={toggle} />
      <UniversalModal isOpen={isOpen} onClose={close}>
        <CardForm columnId={columnId} closeModal={close} />
      </UniversalModal>
    </>
  );
};
