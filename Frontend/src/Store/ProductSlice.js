import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProduct: [],
  isLoading: false,
  error: false,
};

const options = {
  method: "GET",
  url: "https://chinese-food-db.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "87ab7b8d80mshb8ff1775c060fc0p1c1041jsn0008d9232799",
    "x-rapidapi-host": "chinese-food-db.p.rapidapi.com",
  },
};

export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProduct = action.payload;
      console.log("fulfilled");
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
      state.allProduct = [];
      state.error = true;
      console.log("rejected");
    });
  },
});

const { actions, reducer } = productSlice;
export default reducer;
