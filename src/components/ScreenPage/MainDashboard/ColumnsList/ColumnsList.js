import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { changeCardsColumn } from 'redux/dataSlice/operations';
import { useState } from 'react';

// ========================

export const ColumnsList = ({ columns }) => {
  // const [draggedCardId, setDraggedCardId] = useState(null);
  const dispatch = useDispatch();

  // const getDraggedCardId = cardId => {
  //   console.log('test', draggedCardId);
  //   setDraggedCardId(cardId);
  // };

  // console.log('state', draggedCardId);

  const handleDraqDrop = results => {
    console.log(results);
    const { source, destination, draggableId } = results;

    // if (!draggedCardId) return;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      return;
    }

    // console.log('dispatch', draggedCardId);
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
