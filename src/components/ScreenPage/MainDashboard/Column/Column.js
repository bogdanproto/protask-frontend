import { PencilIcon, BasketIcon } from 'components/common/IconsLibrary';
import { CardsList } from '../CardsList/CardsList';
import { AddCardBtn } from '../AddCardBtn/AddCardBtn';
import {
  ColumnContainer,
  ColumnTitlePlate,
  ButtonBox,
  ActionButton,
} from './Column.styled';

export const Column = () => {
  return (
    <ColumnContainer>
      <ColumnTitlePlate>
        <h3>Test Column</h3>
        <ButtonBox>
          <ActionButton>
            <PencilIcon size={16} />
          </ActionButton>
          <ActionButton>
            <BasketIcon size={16} />
          </ActionButton>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList />

      <AddCardBtn />
    </ColumnContainer>
  );
};
