import { useSelector } from 'react-redux';

import { selectActiveBoard } from 'redux/dataSlice/selectors';
import { ScreenPage, BoardNotFound } from './Board.styled';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';

// ========================

export const Board = () => {
  const activeBoard = useSelector(selectActiveBoard);

  return (
    <>
      {activeBoard ? (
        <ScreenPage>
          <HeaderDashboard boardTitle={activeBoard.title} />
          <MainDashboard boardId={activeBoard._id} />
        </ScreenPage>
      ) : (
        <BoardNotFound>
          <p>
            Before starting your project, it is essential to create a board to
            visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </BoardNotFound>
      )}
    </>
  );
};
