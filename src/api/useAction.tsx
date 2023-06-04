import useSWR from "swr";
import apiConfig from "./apiConfig";
import axios from "axios";
import { ActionType } from "../model/api/document";

const getActions = (url: string) => {
  return axios.get(url).then((res) => res.data.actions as ActionType[]);
};

const useAction = () => useSWR(apiConfig.url.document.history(), getActions);

export default useAction;
