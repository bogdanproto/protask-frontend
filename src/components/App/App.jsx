import { RoutesComp } from 'components/Routes/RoutesComp';
import { Sidebar} from 'components/Sidebar'

export const App = () => {
  return (
    <>
      <div className="container">
        <h1>WELCOME TO OUR PROJECT</h1>
        <RoutesComp />
        {/* <Header />
        <AnyComponent /> */}
        <Sidebar></Sidebar>
      </div>
    </>
  );
};
