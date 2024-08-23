import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    isLoggedin: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { setUserName, setIsLoggedin } = userSlice.actions;
export default userSlice.reducer;
