import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { Filters } from 'components/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, FakeBox } from './Home.styled';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';
import { CardForm } from 'components/CardForm/CardForm';

export const Home = () => {
  const dispatch = useDispatch();
  const { isOpen, close, toggle } = useModal();

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
      <button onClick={() => toggle()}>NewCard</button>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <CardForm />
      </UniversalModal>
    </HomePage>
  );
};
