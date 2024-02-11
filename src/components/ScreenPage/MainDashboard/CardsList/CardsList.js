import { List } from './CardsList.styled';
import { Card } from 'components/ScreenPage/MainDashboard/Card/Card';
import { useSelector } from 'react-redux';
import { selectFilteredCardsOfBoard } from 'redux/dataSlice/selectors';

// ========================

export const CardsList = ({ columnId, cards }) => {
  //const dispatch = useDispatch();
  const visibleCards = useSelector(selectFilteredCardsOfBoard);

  return (
    <List>
      {visibleCards[0].cards &&
        visibleCards[0].cards.map(card => (
          <li key={card._id}>
            <Card columnId={columnId} card={card} />
          </li>
        ))}
    </List>
  );
};
