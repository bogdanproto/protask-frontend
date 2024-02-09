import React from 'react';
import { useParams } from 'react-router';
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

// export const Board = () => {
//   const { boardName } = useParams();

//   return (
//     <>
//       <h1>{`Board ${boardName}`}</h1>;
//       {/* <button onClick={() => dispath(deleteBoard('65c4ca89233c119056a4b7b2'))}>
//         AddBoard
//       </button> */}
//     </>
//   );
// };
