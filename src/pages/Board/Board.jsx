import { useSelector } from 'react-redux';

import { selectActiveBoard } from 'redux/dataSlice/selectors';
import { ScreenPage, BoardNotFound } from './Board.styled';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';

// ===== test temp data =====

// const content = true;
// const content = false;
// ===== test temp data =====

export const Board = () => {
  const activeBoard = useSelector(selectActiveBoard);
  console.log(activeBoard);

  return (
    <>
      {!activeBoard ? (
        <BoardNotFound>PLEASE CHOOSE BOARD</BoardNotFound>
      ) : (
        <ScreenPage>
          <HeaderDashboard title={activeBoard?.title} />
          <MainDashboard />
        </ScreenPage>
      )}
    </>
  );
};
