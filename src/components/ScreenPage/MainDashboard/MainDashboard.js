import { AddColumnBtn } from './AddColumnBtn/AddColumnBtn';
import { ColumnsList } from './ColumnsList/ColumnsList';
import { MainDashboardContainer } from './MainDashboard.styled';

export const MainDashboard = () => {
  return (
    <MainDashboardContainer>
      <ColumnsList />
      <AddColumnBtn />
    </MainDashboardContainer>
  );
};
