import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryProps } from "@/types";

interface DataState {
    data: CountryProps[]
    filteredData: CountryProps[]
}

const initialState: DataState = {
    data:[],
    filteredData:[],
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setData:(state, action: PayloadAction<CountryProps[]>) => {
            state.data = action.payload
            state.filteredData = action.payload
        },
        setFilteredData(state, action: PayloadAction<CountryProps[]>) {
            state.filteredData = action.payload
        }
    }
})

export const {setData, setFilteredData} = dataSlice.actions
export default dataSlice.reducer