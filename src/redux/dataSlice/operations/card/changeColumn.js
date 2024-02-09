import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCardsColumnAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
// columnId
// }

export const changeCardsColumn = createAsyncThunk(
  'data/changeCardsColumn',
  asyncThunkDecoratorData(async obj => {
    const { data } = await changeCardsColumnAPI(obj);
    return data;
  })
);
