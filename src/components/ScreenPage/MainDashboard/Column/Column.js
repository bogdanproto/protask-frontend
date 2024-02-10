import { useDispatch } from 'react-redux';

import { PencilIcon, BasketIcon } from 'components/common/IconsLibrary';
import { CardsList } from '../CardsList/CardsList';
import {
  ColumnContainer,
  ColumnTitlePlate,
  ButtonBox,
  ColumnTitle,
} from './Column.styled';
import { EditButtonWrapper } from 'components/common/EditButtonWrapper/EditButtonWrapper';
import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';

// ========================

export const Column = ({ column }) => {
  const dispatch = useDispatch();

  const onEditButton = () => {
    console.log('Click on Edit');
  };

  const onDeleteButton = () => {
    console.log('Click on Delete');
  };

  return (
    <ColumnContainer>
      <ColumnTitlePlate>
        <ColumnTitle>{column.title}</ColumnTitle>
        <ButtonBox>
          <EditButtonWrapper type="button" onClick={onEditButton}>
            <PencilIcon size={16} />
          </EditButtonWrapper>
          <EditButtonWrapper type="button" onClick={onDeleteButton}>
            <BasketIcon size={16} />
          </EditButtonWrapper>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList cards={column.cards} />

      <AddColumnCardButton title="Add another card" />
    </ColumnContainer>
  );
};
