import axios from "axios";
import apiConfig from "../apiConfig";

import { CreateDocumentRespType } from "../../model/api/document";

const createDocument = (
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
      return data;
    });
};

export default createDocument;
