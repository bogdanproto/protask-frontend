import { Draggable } from 'react-beautiful-dnd';
import { List } from './CardsList.styled';
import { Card } from 'components/ScreenPage/MainDashboard/Card/Card';

// ========================

export const CardsList = ({ columnId, cards }) => {
  return (
    <List>
      {cards.map((card, index) => (
        <Draggable draggableId={card._id} key={card._id} index={index}>
          {provided => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card columnId={columnId} card={card} />
            </div>
          )}
        </Draggable>
      ))}
    </List>
  );
};
