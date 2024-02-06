import React from 'react';
// import { useParams } from 'react-router';
import {
  FakeContainer,
  FakeBox,
  FakeHeader,
  FakeSidebar,
} from './Board.styled';
import { ScreenPage } from 'components/ScreenPage/index';

// const content = true;
// const content = false;

export const Board = () => {
  // const { boardName } = useParams();
  return (
    <FakeContainer>
      <FakeSidebar />
      <FakeBox>
        <FakeHeader />
        <ScreenPage />
      </FakeBox>
    </FakeContainer>
  );
};
