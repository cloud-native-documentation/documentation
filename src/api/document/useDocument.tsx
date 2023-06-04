import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";

import { DocumentRespType } from "../../model/api/document";

import { useFileStore } from "../../store/workspace";

type DocumentData = {
  fileID: string;
  version?: string;
};

const getParams = (fileID: string, version: string | undefined) => {
  if (version) {
    return { id: fileID, version: version };
  }
  return { id: fileID };
}

const getDocument = (_: string, { arg: {fileID, version} }: { arg: DocumentData }) => {
  const url = apiConfig.url.document.view();
  const config = { params: getParams(fileID, version) };

  return axios
    .get(url, config)
    .then((res) => res.data as DocumentRespType)
    .then((data) => {
      useFileStore.getState().selectFile(fileID);
      useFileStore.getState().setContent(data.content);
    });
};

const useDocument = () =>
  useSWRMutation(apiConfig.url.document.view(), getDocument);

export default useDocument;
