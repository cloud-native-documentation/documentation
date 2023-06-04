import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";

import { CreateDocumentRespType } from "../../model/api/document";

import { useProjectStore } from "../../store/workspace";

type createDocumentData = {
  file: string;
  directory: string;
  project: string;
  isPublic: string;
  isPrivate: string;
};

const createDocument = (
  _: string,
  {
    arg: { file, directory, project, isPublic, isPrivate },
  }: {
    arg: createDocumentData;
  }
) => {
  const url = apiConfig.url.document.create();
  const data = {
    file: file,
    directory: directory,
    project: project,
    public: isPublic,
    private: isPrivate,
  };

  return axios
    .post(url, data)
    .then((res) => res.data as CreateDocumentRespType)
    .then((data) => {
      useProjectStore.getState().createItem(file, directory, true);
      return data;
    });
};

const useCreateDocument = () =>
  useSWRMutation(apiConfig.url.document.create(), createDocument);

export default useCreateDocument;
