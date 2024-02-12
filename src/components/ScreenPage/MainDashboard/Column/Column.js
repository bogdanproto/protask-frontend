import { useDispatch } from 'react-redux';

import { useModal } from 'hooks/useModal';

import { deleteColumn } from 'redux/dataSlice/operations';

import { EditButton } from 'components/common/EditButton/EditButton.styled';
import { PencilIcon, BasketIcon } from 'components/common/IconsLibrary';
import { CardsList } from '../CardsList/CardsList';

import {
  ColumnContainer,
  ColumnTitlePlate,
  ButtonBox,
  ColumnTitle,
} from './Column.styled';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { AddCardButton } from '../AddCardButton/AddCardButton';
import { CardForm } from 'components/CardForm/CardForm';

// ========================

export const Column = ({ column: { _id, title, cards } }) => {
  const dispatch = useDispatch();
  const { isOpen, close, toggle } = useModal();

  const onDeleteButton = columnId => {
    dispatch(deleteColumn(columnId));
  };

  return (
    <ColumnContainer>
      <ColumnTitlePlate>
        <ColumnTitle>{title}</ColumnTitle>
        <ButtonBox>
          <EditButton type="button" onClick={() => toggle()}>
            <PencilIcon size={16} />
          </EditButton>
          <EditButton type="button" onClick={() => onDeleteButton(_id)}>
            <BasketIcon size={16} />
          </EditButton>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList columnId={_id} cards={cards} />

      <AddCardButton columnId={_id} onClick={toggle} />

      <UniversalModal isOpen={isOpen} onClose={close}>
        <CardForm columnId={_id} closeModal={close} />
      </UniversalModal>
    </ColumnContainer>
  );
};
