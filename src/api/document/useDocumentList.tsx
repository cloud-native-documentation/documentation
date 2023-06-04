import axios from "axios";
import apiConfig from "../apiConfig";
import useSWR from "swr";
import {
  OldDocumentsRespType,
  OldDocumentType,
} from "../../model/api/document";

const exampleDocument: OldDocumentType = {
  name: "File A",
  isFile: false,
  id: "0001",
};

const exampleDirectory: OldDocumentType = {
  name: "Dir_A",
  isFile: true,
  id: "0002",
};

const exampleDocumentList: OldDocumentsRespType = {
  status: "success",
  documentlist: [exampleDocument, exampleDirectory, exampleDocument],
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
