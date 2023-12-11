import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/products/productSlice'
import brandReducer from '../features/brand/brandSlice'
import prodCatsReducer from '../features/categories/prodCatSlice'
import colorReducer from '../features/color/colorSlice'
import blogCatReducer from '../features/blogs/blogCatSlice'
import blogReducer from '../features/blogs/blogSlice'
import enquiryReducer from '../features/enquiries/enquirySlice'
import orderReducer from '../features/enquiries/enquirySlice'

export const store = configureStore({
    reducer: {
        auth: authReducer, 
        customers: customerReducer,
        products: productReducer,
        brands: brandReducer,
        prodCategories: prodCatsReducer,
        colors: colorReducer,
        blogCategories: blogCatReducer,
        blogs: blogReducer,
        enquiries: enquiryReducer,
        orders: orderReducer
    }
})