import { createAsyncThunk } from '@reduxjs/toolkit';
import { addColumnAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
//     title;
//     boardId;
// }

export const addColumn = createAsyncThunk(
  'data/addColumn',
  asyncThunkDecoratorData(async obj => {
    const { data } = await addColumnAPI(obj);
    return data;
  })
);
