import { useDispatch } from 'react-redux';

import { useModal } from 'hooks/useModal';

import { deleteColumn } from 'redux/dataSlice/operations';

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
import { ActionButton } from 'components/common/ActionButton/ActionButton.styled';
import Tooltip from '@mui/material/Tooltip';
import { Droppable } from 'react-beautiful-dnd';

// ========================

export const Column = ({ column: { _id, title, cards } }) => {
  const dispatch = useDispatch();
  const { isOpen, close, toggle } = useModal();

  const onDeleteButton = columnId => {
    dispatch(deleteColumn(columnId));
  };

  return (
    <Droppable droppableId={_id}>
      {provided => (
        <ColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
          <ColumnTitlePlate>
            <ColumnTitle>{title}</ColumnTitle>
            <ButtonBox>
              <Tooltip title="Edit" placement="top">
                <ActionButton type="button" onClick={() => toggle()}>
                  <PencilIcon size={16} />
                </ActionButton>
              </Tooltip>

              <Tooltip title="Delete" placement="top">
                <ActionButton type="button" onClick={() => onDeleteButton(_id)}>
                  <BasketIcon size={16} />
                </ActionButton>
              </Tooltip>
            </ButtonBox>
          </ColumnTitlePlate>

          {cards.length > 0 && <CardsList columnId={_id} cards={cards} />}

          <AddCardButton columnId={_id} />

          <UniversalModal isOpen={isOpen} onClose={close}>
            <ColumnForm columnId={_id} closeModal={close} title={title} />
          </UniversalModal>
          {provided.placeholder}
        </ColumnContainer>
      )}
    </Droppable>
  );
};
