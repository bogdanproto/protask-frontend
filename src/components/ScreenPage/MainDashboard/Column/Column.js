import { useDispatch } from 'react-redux';
import { useModal } from 'hooks/useModal';

import { deleteColumn } from 'redux/dataSlice/operations';

import { EditButtonWrapper } from 'components/common/EditButtonWrapper/EditButtonWrapper';
import { PencilIcon, BasketIcon } from 'components/common/IconsLibrary';
import { CardsList } from '../CardsList/CardsList';
import { ColumnForm } from 'components/ColumnForm/ColumnForm';
import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';
import {
  ColumnContainer,
  ColumnTitlePlate,
  ButtonBox,
  ColumnTitle,
} from './Column.styled';

import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';

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
          <EditButtonWrapper type="button" onClick={() => toggle()}>
            <PencilIcon size={16} />
          </EditButtonWrapper>
          <EditButtonWrapper type="button" onClick={() => onDeleteButton(_id)}>
            <BasketIcon size={16} />
          </EditButtonWrapper>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList cards={cards} />

      <AddColumnCardButton title="Add another card" />

      <UniversalModal isOpen={isOpen} onClose={close}>
        <ColumnForm columnId={_id} title={title} />
      </UniversalModal>
    </ColumnContainer>
  );
};
