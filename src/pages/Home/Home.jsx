import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';
import { selectAllBoard } from 'redux/dataSlice/selectors';
import { selectWallPapers } from 'redux/uiSlice/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const isBoardExist = useSelector(selectAllBoard);
  const isWallpapersExist = useSelector(selectWallPapers);

  useEffect(() => {
    if (isWallpapersExist.length) {
      return;
    } else {
      dispatch(getAllWallpapers());
    }

    if (isBoardExist.length) {
      return;
    } else {
      dispatch(getAllBoards());
    }
  }, [dispatch, isBoardExist.length, isWallpapersExist.length]);

  return (
    <HomePage>
      <Sidebar />
      <Main>
        <Header />
        <Outlet />
      </Main>
    </HomePage>
  );
};
