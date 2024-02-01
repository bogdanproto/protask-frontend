import { BarLoader } from 'react-spinners';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <BarLoader color="#60c0ac96" width="100%" />
    </LoaderStyled>
  );
};
