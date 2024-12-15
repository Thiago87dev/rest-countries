import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkMode/slice"
import dataReducer from './data/slice'

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        data: dataReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store