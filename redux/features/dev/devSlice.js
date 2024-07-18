import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  developedBy: "Developed By Nitesh Limbu",
};

const devSlice = createSlice({
  name: "Developer",
  initialState,
  reducers: {
    updateDevDetails: (state, action) => {
      state.developedBy = "Developed By Nitesh Limbu";
    },
    
  },
});

export const { updateDevDetails } = devSlice.actions;
export default devSlice.reducer;
