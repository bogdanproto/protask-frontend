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
import { ColumnForm } from 'components/ColumnForm/ColumnForm';

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

      {cards && <CardsList columnId={_id} cards={cards} />}

      <AddCardButton columnId={_id} />

      <UniversalModal isOpen={isOpen} onClose={close}>
        <ColumnForm columnId={_id} closeModal={close} title={title} />
      </UniversalModal>
    </ColumnContainer>
  );
};
