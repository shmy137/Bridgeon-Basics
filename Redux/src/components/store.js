import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './createslice.js';

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export default store