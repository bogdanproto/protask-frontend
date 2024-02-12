import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toSeSuccesMsgUser } from 'redux/authSlice';
import { toSetSuccesMsgData } from 'redux/dataSlice';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Notification = ({ type, message }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(toSeSuccesMsgUser(null));
    dispatch(toSetSuccesMsgData(null));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
