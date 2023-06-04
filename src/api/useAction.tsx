// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "./apiConfig";
import axios from "axios";
import { ActionType } from "../model/api/document";


const getActions = () => {
  const url = apiConfig.url.document.history();
  return axios
    .get(url)
    .then((res) => res.data.actions as ActionType[])
};


const useAction = () =>
  useSWR(apiConfig.url.document.view(), getActions);

export default useAction;