import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";
import { useAuthStore } from "../../store/auth";
import { LogoutRespType } from "../../model/api/auth";

async function logout() {
  await axios
    .get(apiConfig.url.auth.logout())
    .then((res) => res.data as LogoutRespType)
    .then((data) => {
      useAuthStore.getState().clear();
      return data;
    });
}

const useLogout = () => useSWRMutation(apiConfig.url.auth.logout(), logout);

export default useLogout;
