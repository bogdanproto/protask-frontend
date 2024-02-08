import { useParams } from 'react-router';

export const Board = () => {
  const { boardName } = useParams();

  return (
    <>
      <h1>{`Board ${boardName}`}</h1>;
      {/* <button onClick={() => dispath(deleteBoard('65c4ca89233c119056a4b7b2'))}>
        AddBoard
      </button> */}
    </>
  );
};
