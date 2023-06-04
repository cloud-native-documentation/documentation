import axios from "axios";
import apiConfig from "../apiConfig";
import useSWR from "swr";
import { OldDocumentsRespType } from "../../model/api/document";

const exampleDocumentList: OldDocumentsRespType = {
  status: "success",
  documentlist: ["Dir00/", "Dir01/", "Dir02/", "README.md"],
};

const fetcher = ([url, project, directory]: [
  string,
  string,
  string
]): Promise<OldDocumentsRespType> => {
  const config = {
    params: {
      project: project,
      directory: directory,
    },
  };
  return exampleDocumentList;

  return axios.get(url, config).then((res) => res.data as OldDocumentsRespType);
};

const useOldDocuments = (
  project: string,
  directory: string,
  loadDocuments: boolean
) => {
  console.log(directory, project);
  return useSWR(
    loadDocuments ? [apiConfig.url.document.list(), project, directory] : null,
    fetcher
  );
};

export default useOldDocuments;
