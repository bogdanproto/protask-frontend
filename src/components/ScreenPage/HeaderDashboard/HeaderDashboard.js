import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
//import { Filters } from './Filters/Filters';
import { Filters } from 'components/Filters';

// ========================

export const HeaderDashboard = ({ boardTitle }) => {
  return (
    <HeaderDashboardContainer>
      <BoardTitle>{boardTitle}</BoardTitle>
      <Filters type="button" />
    </HeaderDashboardContainer>
  );
};
