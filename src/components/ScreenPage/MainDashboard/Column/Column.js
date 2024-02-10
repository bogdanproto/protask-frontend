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

export const Column = ({ column }) => {
  return (
    <ColumnContainer>
      <ColumnTitlePlate>
        <ColumnTitle>{column.title}</ColumnTitle>
        <ButtonBox>
          <EditButtonWrapper>
            <PencilIcon size={16} />
          </EditButtonWrapper>
          <EditButtonWrapper>
            <BasketIcon size={16} />
          </EditButtonWrapper>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList cards={column.cards} />

      <AddColumnCardButton title="Add another card" />
    </ColumnContainer>
  );
};
