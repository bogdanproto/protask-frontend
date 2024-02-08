import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateBoardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
//   title: String;
//   icon: ["project", "star", "loading", "puzzle", "container", "lightning", "colors", "hexagon"],
//   backgroundImg:  [
//   null,
//   '65bd63bfbe42db36576cef07',
// ];
// }

export const updateBoard = createAsyncThunk(
  'data/updateBoard',
  asyncThunkDecoratorData(async obj => {
    const { data } = await updateBoardAPI(obj);
    return data;
  })
);
