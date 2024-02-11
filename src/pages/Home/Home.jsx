import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';
import { selectIsBoardsUploaded } from 'redux/dataSlice/selectors';
import { selectWallPapers } from 'redux/uiSlice/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const isBoardsExist = useSelector(selectIsBoardsUploaded);
  const isWallpapersExist = useSelector(selectWallPapers);

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
        <Outlet />
      </Main>
    </HomePage>
  );
};
