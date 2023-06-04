import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";

import { DocumentRespType } from "../../model/api/document";

import { useFileStore } from "../../store/workspace";

type DocumentData = {
  file: string;
  directory: string;
  project: string;
};

const getDocument = (
  _: string,
  { arg: { file, directory, project } }: { arg: DocumentData }
) => {
  const url = apiConfig.url.document.view();
  const config = {
    params: {
      file: file,
      directory: directory,
      project: project,
    },
  };

  return axios
    .get(url, config)
    .then((res) => res.data as DocumentRespType)
    .then((data) => {
      useFileStore.getState().selectFile(file);
      useFileStore.getState().setContent(data.content);
    });
};

const useDocument = () =>
  useSWRMutation(apiConfig.url.document.view(), getDocument);

export default useDocument;
