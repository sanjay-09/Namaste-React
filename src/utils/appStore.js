import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore({
    //this is a whole big reducer for our store  
    reducer:{
        cart:cartReducer
    }
});



export default appStore;