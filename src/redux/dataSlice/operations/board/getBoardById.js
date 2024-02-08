import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBoardByIdAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// _id

export const getBoardById = createAsyncThunk(
  'data/getBoardById',
  asyncThunkDecoratorData(async id => {
    const { data } = await getBoardByIdAPI(id);
    return data;
  })
);
