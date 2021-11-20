import * as React from "react";
import { Box } from "theme-ui";

import UserList from "@/features/users/UserList";
import UserSearch from "@/features/users/UserSearch";
import UserTitle from "@/features/users/UserTitle";

const Users = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "0 auto",
        width: "20rem",
        textAlign: "center",
      }}
    >
      <UserTitle />
      <UserSearch />
      <UserList />
    </Box>
  );
};

export default Users;
