import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create the async thunk
export const fetchDataFromAPI = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=56e7342aa7af4584b0c630536a4ffb08');
    const data = await response.json();
    return data;
  }
);
console.log(fetchDataFromAPI);


const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const dataReducer = dataSlice.reducer;


export default dataSlice.reducer;
