import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userDetailReducer from "../features/userDetail/userDetailSlice";
import devReducer from "../features/dev/devSlice";
export const store=configureStore({
    reducer:{
        auth:authReducer,
        user:userDetailReducer,
        dev:devReducer
    }
});