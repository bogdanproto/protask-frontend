import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';

// ========================

export const ColumnsList = ({columns}) => {
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
