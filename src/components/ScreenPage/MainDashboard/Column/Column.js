import { LuPencil } from 'react-icons/lu';
import { PiTrashSimpleBold } from 'react-icons/pi';
import { CardsList } from '../CardsList/CardsList';
import { AddCardBtn } from '../AddCardBtn/AddCardBtn';
import {
  ColumnContainer,
  ColumnTitlePlate,
  ButtonBox,
  CtrlButton,
} from './Column.styled';

export const Column = ({ column: { title } }) => {
  return (
    <ColumnContainer>
      <ColumnTitlePlate>
        <h3>{title}</h3>
        <ButtonBox>
          <CtrlButton>
            <LuPencil size={16} />
          </CtrlButton>
          <CtrlButton>
            <PiTrashSimpleBold size={16} />
          </CtrlButton>
        </ButtonBox>
      </ColumnTitlePlate>

      <CardsList />

      <AddCardBtn />
    </ColumnContainer>
  );
};
