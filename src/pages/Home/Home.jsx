import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Header } from 'components/Header';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWallpapers());
  }, [dispatch]);

  return (
    <div >
    <Header/>
      <Sidebar></Sidebar>
    </div>
  );
};
