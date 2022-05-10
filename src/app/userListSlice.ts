import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchUserList, fetchMoreUserList, User } from "../api/userListAPI";
import { getNextLink } from "../helpers/formatPaginateLinks";

export interface UserListState {
  data: User[];
  nextLink: string | null;
  status: FetchStatus;
}

const initialState: UserListState = {
  data: [],
  nextLink: null,
  status: "idle",
};

export const getUserList = createAsyncThunk(
  "userList/fetchUserList",
  async (pageLimit?: number) => {
    return await fetchUserList(pageLimit);
  }
);

export const getMoreUserList = createAsyncThunk(
  "userList/fetchMoreUserList",
  async (url: string) => {
    return await fetchMoreUserList(url);
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
        state.nextLink = getNextLink(action.payload.links);
      })
      .addCase(getUserList.rejected, (state) => {
        state.status = "failed";
      });

    builder
      .addCase(getMoreUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoreUserList.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = [...state.data, ...action.payload.data];
        state.nextLink = getNextLink(action.payload.links);
      })
      .addCase(getMoreUserList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const userList = (state: RootState) => state.userList.data;
export const nextLinks = (state: RootState) => state.userList.nextLink;

export default userListSlice.reducer;
