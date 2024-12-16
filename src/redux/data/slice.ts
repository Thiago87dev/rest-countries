import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryProps } from "@/types";

interface DataState {
  data: CountryProps[];
  filteredData: CountryProps[];
  searchText: string;
  selectedRegion: string;
  currentPage: number;
}

const initialState: DataState = {
  data: [],
  filteredData: [],
  searchText: "",
  selectedRegion: "",
  currentPage: 1,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<CountryProps[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
      state.currentPage = 1;
      dataSlice.caseReducers.applyFilters(state);
    },
    setSelectedRegion(state, action: PayloadAction<string>) {
      state.selectedRegion = action.payload;
      state.currentPage = 1;
      dataSlice.caseReducers.applyFilters(state);
    },
    applyFilters(state) {
      state.filteredData = state.data.filter((country) => {
        const matchsSearch =
          !state.searchText ||
          country.name.toLowerCase().includes(state.searchText.toLowerCase());
        const matchesRegion =
          !state.selectedRegion || country.region === state.selectedRegion;
        return matchsSearch && matchesRegion;
      });
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setData, setSearchText, setSelectedRegion, setCurrentPage } =
  dataSlice.actions;
export default dataSlice.reducer;
