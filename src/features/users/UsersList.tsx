import { Box, Text } from "@theme-ui/components";
import * as React from "react";

import Error from "./Error";
import Loading from "./Loading";
import NoResult from "./NoResult";
import useUsers from "./useUser";

const UsersList = () => {
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
          <Box as="li" key={user.id} sx={{ mb: 2 }}>
            <Text>{user.name}</Text>
            <Text sx={{ color: "grey", ml: 1, fontSize: "0.8rem" }}>
              @{user.username}
            </Text>
          </Box>
        ))}
      </Box>
    );
  }

  return <Error refetch={refetch}>Oh no, there was an error</Error>;
};

export default UsersList;
