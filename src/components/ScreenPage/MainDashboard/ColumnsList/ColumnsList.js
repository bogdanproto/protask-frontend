import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';

export const ColumnsList = ({ items }) => {
  return (
    <List>
      {items.map(column => (
        <li key={column._id}>
          <Column column={column} />
        </li>
      ))}
    </List>
  );
};
