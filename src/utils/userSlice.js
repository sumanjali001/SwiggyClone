import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedin: false,
    uname: "",
    userData: {},
  },
  reducers: {
    setUname: (state, action) => {
      state.uname = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userData = action.payload;
    },

    setIsLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { setUserDetails, setIsLoggedin, setUname } = userSlice.actions;
export default userSlice.reducer;

{
  /**setUserName: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    }, */
}
