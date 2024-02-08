import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBoardsAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

export const getAllBoards = createAsyncThunk(
  'data/getAllBoards',
  asyncThunkDecoratorData(async () => {
    const { data } = await getAllBoardsAPI();
    return data;
  })
);
