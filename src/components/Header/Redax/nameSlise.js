import { createSlice } from "@reduxjs/toolkit";


const nameSlice = createSlice({
    name: 'name',
    initialState:{
        name: "Katrin"  //додати імя з беку
    }
})

export const nameReducer = nameSlice.reducer;