import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBoards } from 'redux/dataSlice/operations';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { selectIsBoardsUploaded } from 'redux/dataSlice/selectors';
import { selectWallPapers } from 'redux/uiSlice/selectors';

import { Sidebar } from 'components/Sidebar';
import { Header } from 'components/Header';
import { StartPage } from 'components/ScreenPage/StartPage/StartPage';
import { HomePage, Main } from './Home.styled';

// ========================

export const Home = () => {
  const dispatch = useDispatch();
  const isBoardsExist = useSelector(selectIsBoardsUploaded);
  const isWallpapersExist = useSelector(selectWallPapers);
  const { boardName } = useParams();

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
        {!boardName && <StartPage />}
        <Outlet />
      </Main>
    </HomePage>
  );
};
