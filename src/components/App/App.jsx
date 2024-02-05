import { RoutesComp } from 'components/Routes/RoutesComp';
import { LogoSvg } from 'components/common';

export const App = () => {
  return (
    <>
      <div className="container">
        <h1>WELCOME TO OUR PROJECT</h1>
        <RoutesComp />
        {/* <Header />
        <AnyComponent /> */}
        <LogoSvg />
      </div>
    </>
  );
};
