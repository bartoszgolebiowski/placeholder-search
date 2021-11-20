import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "@/types";

export const placeholderApi = createApi({
  reducerPath: "placeholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: builder => ({
    getUsers: builder.query<User, null>({
      query: () => `users/`,
    }),
  }),
});

export const { useGetUsersQuery } = placeholderApi;
