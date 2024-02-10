import { useSelector } from 'react-redux';

import { selectActiveBoard } from 'redux/dataSlice/selectors';
import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { Filters } from './Filters/Filters';

// ========================

export const HeaderDashboard = () => {
  const activeBoard = useSelector(selectActiveBoard);

  return (
    <HeaderDashboardContainer>
      <BoardTitle>{activeBoard?.title}</BoardTitle>
      <Filters type="button" />
    </HeaderDashboardContainer>
  );
};
