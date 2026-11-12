import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './createSlice.js'

const store = configureStore({
    reducer  : {
        counter : counterReducer
    }
})
export default store