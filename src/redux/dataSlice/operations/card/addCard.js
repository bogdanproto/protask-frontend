import { createAsyncThunk } from '@reduxjs/toolkit';
import { addCardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
//   title;
//   description;
// priority: ["without priority", "low", "medium", "high"]';
// deadline: Joi.date(),
// columnId
// }

export const addCard = createAsyncThunk(
  'data/addCard',
  asyncThunkDecoratorData(async obj => {
    const { data } = await addCardAPI(obj);
    return data;
  })
);
