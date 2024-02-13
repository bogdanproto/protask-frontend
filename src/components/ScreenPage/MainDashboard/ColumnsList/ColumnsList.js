import { List } from './ColumnsList.styled';
import { Column } from '../Column/Column';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// ========================

export const ColumnsList = ({ columns }) => {
  return (
    <DragDropContext onDragEnd={() => console.log('drag drop event')}>
      <Droppable droppableId="ROOT" type="group">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {columns.map((column, index) => (
              <Draggable
                draggableId={column._id}
                key={column._id}
                index={index}
              >
                {provided => {
                  <div
                    style={{
                      width: '300px',
                      height: '300px',
                      backgroundColor: 'tomato',
                    }}
                  />;
                }}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
