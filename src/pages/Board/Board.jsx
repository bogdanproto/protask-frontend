import { useSelector } from 'react-redux';
import { selectActiveBoard } from 'redux/dataSlice/selectors';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';
import { ScreenPage } from './Board.styled';

// ========================

export const Board = () => {
  const activeBoard = useSelector(selectActiveBoard);

  return (
    <ScreenPage>
      <HeaderDashboard boardTitle={activeBoard?.title} />
      <MainDashboard boardId={activeBoard?._id} />
    </ScreenPage>
  );
};
