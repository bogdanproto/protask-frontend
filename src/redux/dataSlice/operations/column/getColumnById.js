import { createAsyncThunk } from '@reduxjs/toolkit';
import { getColumnByIdAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// _id column

export const getColumnById = createAsyncThunk(
  'data/getColumnById',
  asyncThunkDecoratorData(async id => {
    const { data } = await getColumnByIdAPI(id);
    return data;
  })
);
