import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { changeCardsColumn } from 'redux/dataSlice/operations';

// ========================

export const ColumnsList = ({ columns }) => {
  const dispatch = useDispatch();

  const handleDraqDrop = results => {
    const { source, destination, draggableId } = results;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      return;
    }

    dispatch(
      changeCardsColumn({
        _id: draggableId,
        columnId: destination.droppableId,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDraqDrop}>
      <List>
        {columns.map(column => (
          <li key={column._id}>
            <Column column={column} />
          </li>
        ))}
      </List>
    </DragDropContext>
  );
};
