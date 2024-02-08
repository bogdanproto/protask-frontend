import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBoardAPI } from 'api';
import { asyncThunkDecoratorData } from 'helpers/redux/asyncThunkDecoratorData';

// {
//   title: String;
//   icon: ["project", "star", "loading", "puzzle", "container", "lightning", "colors", "hexagon"],
//   backgroundImg:  [
//   null,
//   '65bd63bfbe42db36576cef07',
// ];
// }

export const addBoard = createAsyncThunk(
  'data/addBoard',
  asyncThunkDecoratorData(async obj => {
    const { data } = await addBoardAPI(obj);
    return data;
  })
);

// _id(pin):"65c4c012233c119056a4b597"
// title(pin):"my new Board"
// icon(pin):"star"
// backgroundImg(pin):"65bd63bfbe42db36576cef07"
