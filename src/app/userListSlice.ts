import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchUserList, User } from "../api/userListAPI";

export interface UserListState {
  data: User[];
  links: string | null;
  status: FetchStatus;
}

const initialState: UserListState = {
  data: [],
  links: null,
  status: "idle",
};

export const getUserList = createAsyncThunk(
  "userList/fetchUserList",
  async (pageLimit?: number) => {
    return await fetchUserList(pageLimit);
  }
);

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload.data;
        state.links = action.payload.links;
      })
      .addCase(getUserList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const userList = (state: RootState) => state.userList.data;
export const links = (state: RootState) => state.userList.links;

export default userListSlice.reducer;
