import { NewBoardModal } from 'components/BoardModal';
import { AnyComponent, Header } from 'components/Header';

export const App = () => {
  return (
    <>
      <h1>WELCOME TO OUR PROJECT</h1>
      <Header />
      <AnyComponent />
      <NewBoardModal />
    </>
  );
};
