import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getAllWallpapers());
  }, [dispatch]);

  return (
    <div >
    <Header/>
      <Sidebar></Sidebar>
      <Outlet />
    </>
  );
};
