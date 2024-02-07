import { Btn } from 'components/common/Btn/Btn';
import { CardsList } from '../CardsList/CardsList';
import { ColumnTitlePlate } from './Column.styled';

export const Column = ({ title, _id }) => {
  return (
    <>
      <ColumnTitlePlate>
        <p>{title}</p>
      </ColumnTitlePlate>
      <CardsList />
      <Btn>
        <p>Add another card</p>
      </Btn>
    </>
  );
};
