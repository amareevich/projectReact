import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/sliceCart';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;