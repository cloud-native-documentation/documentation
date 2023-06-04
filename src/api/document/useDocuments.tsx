import axios from "axios";
import useSWR from "swr";
import apiConfig from "../apiConfig";

import { useProjectStore } from "../../store/workspace";

const fetcher = ([url, project, directory]: [
  string,
  string,
  string
]) => {
  const config = {
    params: {
      project: project,
      directory: directory,
    },
  };

  return axios
    .get(url, config)
    .then((res) => res.data)
    .then((data) => {
      useProjectStore.getState().updateProjectFiles(data.documentlist);
      return data;
    });
};

const useDocuments = (
  project: string,
  directory: string,
  loadDocuments: boolean
) => {
  return useSWR(
    loadDocuments ? [apiConfig.url.document.list(), project, directory] : null,
    fetcher
  );
};

export default useDocuments;
