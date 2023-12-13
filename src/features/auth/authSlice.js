import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

const getLocalStrUser = localStorage.getItem('user')?
    JSON.parse(localStorage.getItem('user')) : 
    null

const userDefaultState = {
    _id: null,
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    token: null
}
const initialState = {
    user: getLocalStrUser,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}
export const login = createAsyncThunk('auth/admin-login', async (user, thunkApi) => {
    try {
        return await authService.login(user)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getOrders = createAsyncThunk('user/get-allOrders', async (thunkApi) => {
    try {
        return  await authService.getOrders()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase((login.pending), (state) => {
            state.isLoading = true
        })
        .addCase((login.fulfilled), (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "Success";
        })
        .addCase((login.rejected), (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true
        })
        .addCase((getOrders.fulfilled), (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.orders = action.payload;
            state.message = 'Success';
        })
        .addCase((getOrders.rejected), (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        })
        
    }
})

export default authSlice.reducer