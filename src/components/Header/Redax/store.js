import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import {nameReducer} from "./nameSlise"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        name: nameReducer,
    }
})