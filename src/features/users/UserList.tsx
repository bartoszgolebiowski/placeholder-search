import { Box } from "@theme-ui/components";
import * as React from "react";

import Error from "./Error";
import Loading from "./Loading";
import NoResult from "./NoResult";
import useUsers from "./useUser";

const UserList = () => {
  const { isFiltering, data, isLoading, refetch } = useUsers();

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    if (!data.length) {
      return <NoResult>No users matching filtering criteria</NoResult>;
    }

    return (
      <Box
        as="ol"
        sx={{
          textAlign: "start",
          padding: "0 1rem",
          opacity: isFiltering ? 0.6 : 1,
        }}
      >
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </Box>
    );
  }

  return <Error refetch={refetch}>Oh no, there was an error</Error>;
};

export default UserList;
