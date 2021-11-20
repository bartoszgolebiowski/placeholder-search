import { Box } from "@theme-ui/components";
import * as React from "react";

import { useGetUsersQuery } from "@/services/placeholder";

import Error from "./Error";
import Loading from "./Loading";
import NoResult from "./NoResult";

const UserList = () => {
  const { data, error, refetch } = useGetUsersQuery();

  if (data && data.length > 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "0 auto",
          width: "20rem",
        }}
      >
        <ul>
          {data.map(user => (
            <li key={user.id}>
              {user.name} {user.username}
            </li>
          ))}
        </ul>
      </Box>
    );
  }

  if (data && data.length === 0) {
    return <NoResult>No users matching filtering criteria</NoResult>;
  }

  if (error) {
    return <Error refetch={refetch}>Oh no, there was an error</Error>;
  }

  return <Loading />;
};

export default UserList;
