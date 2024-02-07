import cards from '../../tempData/cards.json';
import { List } from './CardsList.styled';
import { Card } from '../Card/Card';

export const CardsList = () => {
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
