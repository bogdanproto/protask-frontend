import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { Filters } from 'components/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWallpapers());
  }, [dispatch]);

  return (
    <>
      <Sidebar></Sidebar>
      <Filters></Filters>
    </>
  );
};
