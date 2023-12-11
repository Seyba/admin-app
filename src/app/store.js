import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/products/productSlice'
import brandReducer from '../features/brand/brandSlice'
import prodCatsReducer from '../features/categories/prodCatSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        customers: customerReducer,
        products: productReducer,
        brands: brandReducer,
        prodCategories: prodCatsReducer
    }
})