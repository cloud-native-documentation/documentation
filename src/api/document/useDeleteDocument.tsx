import axios from "axios";
import apiConfig from "../apiConfig";

import { DeleteDocumentRespType } from "../../model/api/document";

const useDeleteDocument = (
  file: string,
  directory: string,
  project: string
) => {
  const url = apiConfig.url.document.delete();
  const data = {
    file: file,
    directory: directory,
    project: project
  };

  return axios
    .post(url, data)
    .then((res) => res.data as DeleteDocumentRespType)
    .then((data) => {
      return data;
    });
};

export default useDeleteDocument;
