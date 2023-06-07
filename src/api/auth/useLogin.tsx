import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";
import { useAuthStore } from "../../store/auth";
import { LoginRespType } from "../../model/api/auth";

async function login(
  _: string,
  {
    arg: { username, password },
  }: { arg: { username: string; password: string } }
) {
  await axios
    .post(apiConfig.url.auth.login(), {
      username: username,
      password: password,
    })
    .then((res) => {
      return res.data as LoginRespType;
    })
    .then((data) => {
      useAuthStore.getState().set(data.token);
      return data;
    })
    .catch((err) => {
      if (err.response && err.response.data?.non_field_errors) {
        throw new Error(err.response.data.non_field_errors[0]);
      } else throw err;
    });
}

const useLogin = () => useSWRMutation(apiConfig.url.auth.login(), login);

export default useLogin;
