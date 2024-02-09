import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// _id Card

export const deleteCard = createAsyncThunk(
  'data/deleteCard',
  asyncThunkDecoratorData(async id => {
    const { data } = await deleteCardAPI(id);
    return data;
  })
);
