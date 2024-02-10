import { ColumnsList } from './ColumnsList/ColumnsList';
import { AddColumnCardButton } from 'components/common/AddColumnCardButton/AddColumnCardButton';
import { MainDashboardContainer } from './MainDashboard.styled';

// ========================

export const MainDashboard = () => {
  return (
    <MainDashboardContainer>
      <ColumnsList />
      <AddColumnCardButton title="Add another column" />
    </MainDashboardContainer>
  );
};
