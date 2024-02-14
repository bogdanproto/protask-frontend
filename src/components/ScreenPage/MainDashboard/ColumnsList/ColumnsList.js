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

  // return (
  //   <DragDropContext onDragEnd={handleDraqDrop}>
  //     <Droppable droppableId="ROOT" type="group">
  //       {provided => (
  //         <List {...provided.droppableProps} ref={provided.innerRef}>
  //           {columns.map((column, index) => (
  //             <Draggable
  //               draggableId={column._id}
  //               key={column._id}
  //               index={index}
  //             >
  //               {provided => (
  //                 <div
  //                   {...provided.draggableProps}
  //                   {...provided.dragHandleProps}
  //                   ref={provided.innerRef}
  //                 >
  //                   <Column column={column} />
  //                 </div>
  //               )}
  //             </Draggable>
  //           ))}
  //           {provided.placeholder}
  //         </List>
  //       )}
  //     </Droppable>
  //   </DragDropContext>
  // );
};
