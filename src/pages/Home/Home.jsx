import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'components/Sidebar';
//import { Filters } from 'components/Filters';
import { getAllWallpapers } from 'redux/uiSlice/operations';
import { Outlet } from 'react-router';
import { getAllBoards, /*addCard*/ } from 'redux/dataSlice/operations';
import { Header } from 'components/Header';
import { HomePage, Main } from './Home.styled';
import { selectAllBoard, /*selectFilteredCardsOfBoard*/ } from 'redux/dataSlice/selectors';
import { selectWallPapers } from 'redux/uiSlice/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const isBoardExist = useSelector(selectAllBoard);
  const isWallpapersExist = useSelector(selectWallPapers);

  //const visibleCards = useSelector(selectFilteredCardsOfBoard);
  //console.log('visibleCards', visibleCards[0].cards)

  /*
  const handleClickTest = () => {
    dispatch(addCard({
        title: 'Lorem ipsum',
        description: 'This is my new in progress',
        priority: 'medium',
        deadline: '2024-12-12',
        columnId: '65c90690cc9ad6887c9dc730',
      })
    )
  }
  */

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
      {/*visibleCards[0].cards && visibleCards[0].cards.map(card => <h1>{card.title}</h1>)*/}
      {/*<button
        onClick={handleClickTest}
      >
        ADD CARD
      </button>
      */}
    </HomePage>
  );
};
