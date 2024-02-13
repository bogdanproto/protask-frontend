import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';

// ========================

export const ColumnsList = ({ columns }) => {
  return (
    <List>
      {columns.map(column => (
        <div key={column._id}>
          <Column className="columnContainer" column={column} />
        </div>
      ))}
    </List>
  );
};
