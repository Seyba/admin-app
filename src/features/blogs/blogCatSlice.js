import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import blogCatService from "./blogCatService"


export const getBlogCats = createAsyncThunk('blog/get-blog-categories', async (thunkApi) => {
    try {
        return await blogCatService.getBlogCats()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const initialState = {
    blogCategories : [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const blogCatsSlice = createSlice({
    name: "blogCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBlogCats.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getBlogCats.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blogCategories = action.payload;
        })
        .addCase(getBlogCats.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
    }
})
export default blogCatsSlice.reducer