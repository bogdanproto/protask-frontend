import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
import { Filters } from 'components/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards, getBoardById } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getAllWallpapers());
  }, [dispatch]);

  return (
    <HomePage>
      <Sidebar />
      <Main>
        <Header />
        <Outlet />
      </Main>
      {/* <Filters></Filters> */}
      <button
        onClick={() => dispatch(getBoardById('65c79cfbd49ad1af54b5e72c'))}
      >
        Get board
      </button>
      {/* <button
        onClick={() =>
          dispath(
            addColumn({
              title: 'done',
              boardId: '65c4cf5e233c119056a4b825',
            })
          )
        }
      >
        ADD COLUMN
      </button>
      <button
        onClick={() =>
          dispath(
            addCard({
              title: 'New Task in progress',
              description: 'This is my new in progress',
              priority: 'low',
              deadline: '2024-12-12',
              columnId: '65c52ffff7217df9e472b39c',
            })
          )
        }
      >
        ADD CARD
      </button>
      <button
        onClick={() =>
          dispath(
            changeCardsColumn({
              _id: '65c50a5a28333cecaf10ed90',
              columnId: '65c52ffff7217df9e472b39c',
            })
          )
        }
      >
        MOVE CARD
      </button>
      <button onClick={() => dispath(deleteCard('65c50a5a28333cecaf10ed90'))}>
        delete CARD
      </button>
      <button
        onClick={() =>
          dispath(
            updateCard({
              _id: '65c5313ef7217df9e472b3ba',
              title: 'Totaly update',
              description: 'This is my new in progress',
              priority: 'low',
              deadline: '2024-12-12',
              columnId: '65c52ffff7217df9e472b39c',
            })
          )
        }
      >
        UPDATE CARD
      </button> */}
    </HomePage>
  );
};
