import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSidebar: false,
  };


const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
      isToggleSidebar(state, action){
        state.isOpenSidebar = !state.isOpenSidebar
      }
    }
})

export const burgerReducer = burgerSlice.reducer;
export const {isToggleSidebar} = burgerSlice.actions 