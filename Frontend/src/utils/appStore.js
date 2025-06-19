import { configureStore, Tuple } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;