import { CommonContainer } from './ScreenPage.styled';
import { HeaderDashboard } from '../HeaderDashboard/HeaderDashboard';
import { MainDashboard } from '../MainDashboard/MainDashboard';

export const ScreenPage = () => {
  return (
    <>
      <CommonContainer>
        <HeaderDashboard />
        <MainDashboard />
      </CommonContainer>
    </>
  );
};
