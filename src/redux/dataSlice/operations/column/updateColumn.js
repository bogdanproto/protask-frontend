import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateColumnAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {title, _id}

export const updateColumn = createAsyncThunk(
  'data/updateColumn',
  asyncThunkDecoratorData(async obj => {
    const { data } = await updateColumnAPI(obj);
    return data;
  })
);
