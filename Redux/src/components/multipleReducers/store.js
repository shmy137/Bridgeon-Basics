import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counterslice.js';
import userRedcuer from './userSlice.js';

const store = configureStore({
    reducer  : {
        counter : counterReducer,
        user : userRedcuer
    }
})
export default store;