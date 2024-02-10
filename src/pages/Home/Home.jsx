import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards, getBoardById } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';
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

      <button
        onClick={() => dispatch(getBoardById('65c7ed52e2f5107b19750f7c'))}
      >
        Get board
      </button>

      <Main>
        <Header />
        <Outlet />
      </Main>
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
