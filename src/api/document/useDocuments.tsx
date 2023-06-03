import axios from "axios";
import useSWR from "swr";
import apiConfig from "../apiConfig";

import { DocumentsRespType } from "../../model/api/document";

const fetcher = ([url, project, directory]: [
  string,
  string,
  string
]): Promise<DocumentsRespType> => {
  const config = {
    params: {
      project: project,
      directory: directory,
    },
  };

  return axios.get(url, config).then((res) => res.data as DocumentsRespType);
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
