import { useDispatch, useSelector } from 'react-redux/';

import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';
import { ColumnsList } from './ColumnsList/ColumnsList';
import { MainDashboardContainer } from './MainDashboard.styled';
import {
  selectCardByColumn,
  selectFilteredCards,
} from 'redux/dataSlice/selectors';

// ================================================================

export const MainDashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCardByColumn);

  // const visibleItems = useSelector(selectFilteredCards);
  return (
    <MainDashboardContainer>
      <ColumnsList items={items} />
      <AddColumnCardButton title="Add another column" />
    </MainDashboardContainer>
  );
};
