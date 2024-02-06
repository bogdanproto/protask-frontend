import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { Filters } from './Filters/Filters';

export const HeaderDashboard = () => {
  return (
    <HeaderDashboardContainer>
      <BoardTitle>Project office</BoardTitle>
      <Filters type="button" />
    </HeaderDashboardContainer>
  );
};
