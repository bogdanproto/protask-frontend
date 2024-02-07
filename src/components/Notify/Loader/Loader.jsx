import { LoaderContainer } from './Loader.styled';
import { Stack, LinearProgress } from '@mui/material';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Stack sx={{ width: '100%', color: '#5255BC' }}>
        <LinearProgress color="inherit" />
      </Stack>
    </LoaderContainer>
  );
};
