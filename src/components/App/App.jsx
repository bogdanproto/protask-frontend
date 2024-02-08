import { AnyComponent, Header } from 'components/Header';
import ModalComponent from 'components/Modal/ModalComponent/ModalComponent';
import Test from 'components/Modal/Test/Test';

export const App = () => {
  return (
    <>
      <h1>WELCOME TO OUR PROJECT</h1>
      <Header />
      <AnyComponent />
      <ModalComponent />
      <Test/>
    </>
  );
};
