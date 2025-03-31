import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import jobSlice from './jobSlice'
const appStore = configureStore({
    reducer: {
        auth: authSlice,
        job: jobSlice
    }
})


export default appStore