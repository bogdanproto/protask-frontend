import { useParams } from 'react-router';

export const Board = () => {
  const { boardName } = useParams();

  return (
    <>
      <h1>{`Board ${boardName}`}</h1>;
    </>
  );
};
