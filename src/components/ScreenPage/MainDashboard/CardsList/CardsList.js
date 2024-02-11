import { List } from './CardsList.styled';
import { Card } from '../Card/Card';

// ========================

export const CardsList = ({ cards }) => {
  return (
    <List>
      {cards.map(card => (
        <li key={card._id}>
          <Card card={card} />
        </li>
      ))}
    </List>
  );
};
