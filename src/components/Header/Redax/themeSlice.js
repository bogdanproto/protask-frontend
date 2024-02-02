import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: 'theme',
    initialState:{
        value: "limon"  //додати колір з беку
    }
})

export const themeReducer = themeSlice.reducer;