import { HeaderDashboardContainer, BoardTitle } from './HeaderDashboard.styled';
import { Filters } from './Filters/Filters';

export const HeaderDashboard = ({ title }) => {
  return (
    <HeaderDashboardContainer>
      <BoardTitle>{title}</BoardTitle>
      <Filters type="button" />
    </HeaderDashboardContainer>
  );
};
