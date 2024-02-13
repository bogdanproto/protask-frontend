import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBoards, getBoardById } from 'redux/dataSlice/operations';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { selectIsBoardsUploaded } from 'redux/dataSlice/selectors';
import { selectWallPapers } from 'redux/uiSlice/selectors';

import { Sidebar } from 'components/Sidebar';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';
import { StartPage } from 'components/ScreenPage/StartPage/StartPage';
import { DefaultPage } from 'components/ScreenPage/StartPage/DefaultPage';
import { isLoadingSelectorData } from 'redux/commonSelector';
// ========================

export const Home = () => {
  const dispatch = useDispatch();
  const { boardName } = useParams();

  const isBoardsExist = useSelector(selectIsBoardsUploaded);
  const isWallpapersExist = useSelector(selectWallPapers);
  const isLoading = useSelector(isLoadingSelectorData);

  useEffect(() => {
    if (!boardName) {
      return;
    }
    dispatch(getBoardById(boardName));
  }, [boardName, dispatch]);

  useEffect(() => {
    if (!isBoardsExist) {
      dispatch(getAllBoards());
    }
  }, [dispatch, isBoardsExist]);

  useEffect(() => {
    if (!isWallpapersExist.length) {
      dispatch(getAllWallpapers());
    }
  }, [dispatch, isWallpapersExist.length]);

  return (
    <HomePage>
      <Sidebar />
      <Main>
        <Header />
        {isBoardsExist && !boardName && !isLoading && <DefaultPage />}
        {!isBoardsExist && !isLoading && <StartPage />}
        <Outlet />
      </Main>
    </HomePage>
  );
};
