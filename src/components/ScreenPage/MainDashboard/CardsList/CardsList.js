import { List } from './CardsList.styled';
import { Card } from 'components/ScreenPage/MainDashboard/Card/Card';

// ========================

export const CardsList = ({ columnId, cards }) => {
  return (
    <List>
      {cards.map(card => (
        <li key={card._id}>
          <Card columnId={columnId} card={card} />
        </li>
      ))}
    </List>
  );
};
