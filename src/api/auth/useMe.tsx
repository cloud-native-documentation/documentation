import axios from "axios";
import apiConfig from "../apiConfig";
import useSWR from "swr";

const getMe = (url: string) => {
  return axios
    .get(url)
    .then((res) => res.data.user as { username: string; department: string })
    .then((data) => {
      return data;
    });
};

const useMe = () => useSWR(apiConfig.url.auth.me(), getMe);

export default useMe;
