import { useDispatch, useSelector } from 'react-redux';

import {
  selectActiveBoard,
  selectIsBoardsUploaded,
} from 'redux/dataSlice/selectors';
import { ScreenPage, BoardNotFound } from './Board.styled';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';
import { useEffect } from 'react';
import { getBoardById } from 'redux/dataSlice/operations';
import { useParams } from 'react-router';

// ========================

export const Board = () => {
  const dispatch = useDispatch();
  const activeBoard = useSelector(selectActiveBoard);
  const isBoardsUploaded = useSelector(selectIsBoardsUploaded);
  const { boardName } = useParams();

  useEffect(() => {
    if (!isBoardsUploaded) {
      return;
    }
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch, isBoardsUploaded]);

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
