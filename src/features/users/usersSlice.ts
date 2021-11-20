import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store/store";

interface UsersState {
  search: string | null;
}

const initialState: UsersState = {
  search: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
  },
});

export const { changeSearch } = usersSlice.actions;

export const selectSearch = (state: RootState) => state.users.search;

export default usersSlice.reducer;
