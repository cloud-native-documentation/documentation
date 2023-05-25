import axios from 'axios'
import apiConfig from "../apiConfig";
import { LoginRespType } from "../../model/api/auth";

const useLogin = (username: string, password: string, setJwt: (token: string) => void) => {
  return axios.post(apiConfig.url.auth.login(), {
    username,
    password,
  })
  .then((res) => res.data as LoginRespType)
  .then((data) => {
    setJwt(data.token);
    return data;
  })
};

export default useLogin;
