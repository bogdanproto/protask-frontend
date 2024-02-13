import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getBoardById } from 'redux/dataSlice/operations';
import {
  selectActiveBoard,
  selectIsBoardsUploaded,
} from 'redux/dataSlice/selectors';

import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/ScreenPage/MainDashboard/MainDashboard';
import { ScreenPage } from './Board.styled';

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
    <ScreenPage>
      <HeaderDashboard boardTitle={activeBoard?.title} />
      <MainDashboard boardId={activeBoard?._id} />
    </ScreenPage>
  );
};
