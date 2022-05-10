import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchUserInfo, UserInfo } from "../api/userInfoAPI";

export interface UserInfoState {
  data: UserInfo | null;
  status: FetchStatus;
}

const initialState: UserInfoState = {
  data: null,
  status: "idle",
};

export const getUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  async (userName: string) => {
    return await fetchUserInfo(userName);
  }
);

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clearData } = userInfoSlice.actions;

export const userInfo = (state: RootState) => state.userInfo.data;
export const fetchStatus = (state: RootState) => state.userInfo.status;

export default userInfoSlice.reducer;
