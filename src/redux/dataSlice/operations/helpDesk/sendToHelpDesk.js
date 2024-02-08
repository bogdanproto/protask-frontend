import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendToHelpDeskAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

export const sendToHelpDesk = createAsyncThunk(
  'data/sendToHelpDesk',
  asyncThunkDecoratorData(async obj => {
    const { data } = await sendToHelpDeskAPI(obj);
    return data;
  })
);
