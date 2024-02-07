import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
  };


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
})

export const sidebarReducer = sidebarSlice.reducer;