import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <Box className={styles.loader}>
      <LinearProgress />
    </Box>
  );
}