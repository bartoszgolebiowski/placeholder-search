import { Input } from "@theme-ui/components";
import * as React from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { changeSearch, selectSearch } from "./usersSlice";

const UsersSearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(changeSearch(value ?? ""));
  };

  return (
    <Input
      value={search}
      onChange={handleChange}
      sx={{ mb: 1 }}
      aria-label="search"
      placeholder="Search by user name..."
    />
  );
};

export default UsersSearch;
