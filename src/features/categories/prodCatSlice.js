import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import prodCatService from "./prodCatService"


export const getProdCats = createAsyncThunk('category/get-prod-categories', async (thunkApi) => {
    try {
        return await prodCatService.getProdCats()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const initialState = {
    prodCategories : [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const categorySlice = createSlice({
    name: "prodCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProdCats.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProdCats.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.prodCategories = action.payload;
        })
        .addCase(getProdCats.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
    }
})
export default categorySlice.reducer