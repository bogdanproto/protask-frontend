import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteColumnAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// _id Column

export const deleteColumn = createAsyncThunk(
  'data/deleteColumn',
  asyncThunkDecoratorData(async id => {
    const { data } = await deleteColumnAPI(id);
    return data;
  })
);
