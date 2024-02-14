import { useModal } from 'hooks/useModal';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';

import { CardForm } from 'components/CardForm/CardForm';
import { PlusIcon } from 'components/common/IconsLibrary/index';
import {
  AddButtonContainer,
  IconWrapper,
  ButtonTitle,
} from './AddCardButton.styled';

// ========================

export const AddCardButton = ({ columnId }) => {
  const { isOpen, close, toggle } = useModal();
  return (
    <>
      <AddButtonContainer type="button" onClick={toggle}>
        <IconWrapper>
          <PlusIcon size={28} />
        </IconWrapper>
        <ButtonTitle>Add another card</ButtonTitle>
      </AddButtonContainer>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <CardForm columnId={columnId} closeModal={close} />
      </UniversalModal>
    </>
  );
};
