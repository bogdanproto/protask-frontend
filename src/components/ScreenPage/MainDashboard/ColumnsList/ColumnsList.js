import { useSelector } from 'react-redux/';

import {
  selectAllCardsOfBoard,
  // selectFilteredCardsOfBoard,
} from 'redux/dataSlice/selectors';

import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';

// ========================

export const ColumnsList = () => {
  const columns = useSelector(selectAllCardsOfBoard);
  // const columns = useSelector(selectFilteredCardsOfBoard);

  return (
    <List>
      {columns.map(column => (
        <li key={column._id}>
          <Column column={column} />
        </li>
      ))}
    </List>
  );
};
