import {EditProfile} from 'components/EditProfile/index.js';
import { RoutesComp } from 'components/Routes/RoutesComp';

export const App = () => {
  return (
    <>
      <div className="container">
        <h1>WELCOME TO OUR PROJECT</h1>
        <RoutesComp />
        <EditProfile/>
        {/* <Header />
        <AnyComponent /> */}
      </div>
    </>
  );
};
