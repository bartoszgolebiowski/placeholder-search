import * as React from "react";
import { Box } from "theme-ui";

import UsersList from "@/features/users/UsersList";
import UsersSearch from "@/features/users/UsersSearch";
import UsersTitle from "@/features/users/UsersTitle";

const Users = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "0 auto",
        width: "25rem",
        textAlign: "center",
      }}
    >
      <UsersTitle />
      <UsersSearch />
      <UsersList />
    </Box>
  );
};

export default Users;
