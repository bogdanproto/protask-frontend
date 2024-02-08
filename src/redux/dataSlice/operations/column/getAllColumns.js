import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllColumnsAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// _id Board

export const getAllColumns = createAsyncThunk(
  'data/getAllColumns',
  asyncThunkDecoratorData(async (id) => {
    const { data } = await getAllColumnsAPI(id);
    return data;
  })
);

