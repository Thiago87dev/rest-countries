import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkMode/slice"

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store