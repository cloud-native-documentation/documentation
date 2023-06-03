import axios from "axios";
import apiConfig from "../apiConfig";

import { CreateDocumentRespType } from "../../model/api/document";

import { useProjectStore } from "../../store/workspace";

const useCreateDocument = (
  file: string,
  directory: string,
  project: string,
  isPublic: string,
  isPrivate: string
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

export default useCreateDocument;
