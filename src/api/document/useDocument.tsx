import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";

import { DocumentRespType } from "../../model/api/document";

import { useFileStore } from "../../store/workspace";

const getDocument = (_: string, { arg: fileID }: { arg: string }) => {
  const url = apiConfig.url.document.view();
  const config = { params: { id: fileID } };

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
