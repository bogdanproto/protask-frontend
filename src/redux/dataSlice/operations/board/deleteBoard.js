import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteBoardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

//_id

export const deleteBoard = createAsyncThunk(
  'data/deleteBoard',
  asyncThunkDecoratorData(async id => {
    const { data } = await deleteBoardAPI(id);

    return data;
  })
);
