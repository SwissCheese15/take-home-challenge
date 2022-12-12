import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../Slices/index"

export default configureStore({
    reducer: {
        page: pageReducer
    }
});

