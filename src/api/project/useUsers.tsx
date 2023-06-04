import useSWR from "swr";
import axios from "axios";
import apiConfig from "../apiConfig";
import { UsersResType } from "../../model/api/project";

import { useSelectProjectStore } from "../../store/explorer";

const exampleUsers: UsersResType = {
  status: "success",
  names: ["Alice", "Bob", "Josh"],
};

const fetcher = ([url]: [string]) => {
  return exampleUsers;

  const config = {
    params: {
      project: useSelectProjectStore,
    },
  };

  return axios.get(url, config).then((res) => res.data as UsersResType);
};

const useUsers = () => useSWR([apiConfig.url.project.listUsers()], fetcher);

export default useUsers;
