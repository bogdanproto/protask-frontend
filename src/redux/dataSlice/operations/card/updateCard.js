import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateCardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
//   title;
//   description;
// priority: ["without priority", "low", "medium", "high"]';
// deadline: Joi.date(),
// cardId
// }

export const updateCard = createAsyncThunk(
  'data/updateCard',
  asyncThunkDecoratorData(async obj => {
    const { data } = await updateCardAPI(obj);
    return data;
  })
);
