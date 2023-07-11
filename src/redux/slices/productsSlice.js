import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
      isLoading: false,
      error: "",
      products:[],
      product: {}
};

export const getAllProducts = createAsyncThunk('products/get', async()=>{
      let results = await axios.get("https://fakestoreapi.com/products")
      return results.data;
})

export const getProductById = createAsyncThunk('product/get', async(id, thunkApi)=>{
      console.log(thunkApi)
      let results = await axios.get(`https://fakestoreapi.com/products${id}`);
      return  results.data;
})

const productSLice = createSlice({
      name: "products",
      initialState,
      extraReducers: (builder)=>{
            builder.addCase(getAllProducts.pending, (state, action)=>{
                  state.isLoading = true;
            })

            builder.addCase(getAllProducts.fulfilled, (state, action)=>{
                  state.isLoading = false;
                  state.products = action.payload;
            })

            builder.addCase(getAllProducts.rejected, (state, action)=>{
                  state.isLoading = false;
                  state.error = action.error;
            })

            builder.addCase(getProductById.pending, (state, action)=>{
                  state.isLoading = true;
            })

            builder.addCase(getProductById.fulfilled, (state, action)=>{
                  state.isLoading = false;
                  state.product = action.payload
            })

            builder.addCase(getProductById.rejected, (state, action)=>{
                  state.isLoading = false;
                  state.error = action.error
            })
      }
})

export default productSLice.reducer;