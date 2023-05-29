import axios from "axios";
import apiConfig from "../apiConfig";
import { LogoutRespType } from "../../model/api/auth";

const useLogout = (jwt: string | null, clearJwt: () => void) => {
  return axios
    .get(apiConfig.url.auth.logout(), {
      headers: {
        Authorization: `${jwt}`,
      },
    })
    .then((res) => res.data as LogoutRespType)
    .then((data) => {
      clearJwt();
      return data;
    });
};

export default useLogout;
