import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllWallpapersAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

export const getAllWallpapers = createAsyncThunk(
  'uiData/getAllWallpapers',
  asyncThunkDecoratorData(async () => {
    const { data } = await getAllWallpapersAPI();
    return data;
  })
);
