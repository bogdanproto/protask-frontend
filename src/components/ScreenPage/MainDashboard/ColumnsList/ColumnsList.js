import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// ========================

export const ColumnsList = ({ columns }) => {
  return (
    <DragDropContext onDragEnd={() => console.log('drag drop event')}>
      <Droppable droppableId="ROOT" type="group">
        {(provided, snapshot) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {columns.map((column, index) => (
              <Draggable
                draggableId={column._id}
                key={column._id}
                index={index}
              >
                {(provided, snapshot) => {
                  <Column
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                  />;
                }}
              </Draggable>
            ))}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};
