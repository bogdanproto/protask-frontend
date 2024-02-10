import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { Filters } from 'components/Filters/Filters/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, FakeBox } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getAllWallpapers());
  }, [dispatch]);

  return (
    <HomePage>
      <Sidebar />
      <FakeBox>
        <Header />
        <Outlet />
      </FakeBox>
      <Filters />
    </HomePage>
  );
};