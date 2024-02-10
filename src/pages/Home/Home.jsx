import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { Filters } from 'components/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, FakeBox } from './Home.styled';
import { BoardForm } from 'components/BoardForm/BoardForm';
import UniversalModal from 'components/Modal/UniversalModal/UniversalModal';
import { useModal } from 'hooks/useModal';

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
      <button onClick={() => toggle()}>NewBoard</button>
      <UniversalModal isOpen={isOpen} onClose={close}>
        <BoardForm
          closeModal={close}
          id={'65c7ca72d49ad1af54b5ec17'}
          title={'First Board'}
        />
      </UniversalModal>
    </HomePage>
  );
};
