import * as React from "react";

import { useGetUsersQuery } from "@/services/placeholder";
import { useAppSelector } from "@/store/hooks";

import { selectSearch } from "./usersSlice";

const DELAY = 500;

const useUsers = () => {
  const { data, ...rest } = useGetUsersQuery();
  const search = useAppSelector(selectSearch);
  const [currentFilter, setCurrentFilter] = React.useState(search);
  const [isFiltering, setIsFiltering] = React.useState(false);

  React.useEffect(() => {
    setIsFiltering(true);
    const id = setTimeout(() => {
      setCurrentFilter(search);
      setIsFiltering(false);
    }, DELAY);
    return () => {
      clearTimeout(id);
    };
  }, [search, setCurrentFilter]);

  if (data) {
    return {
      isFiltering: search !== currentFilter ? isFiltering : false,
      data: data.filter(user =>
        user.name.toLowerCase().includes(currentFilter.toLowerCase())
      ),
      ...rest,
    } as const;
  }

  return {
    isFiltering: false,
    data,
    ...rest,
  } as const;
};

export default useUsers;
