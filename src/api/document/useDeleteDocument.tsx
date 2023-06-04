import axios from "axios";
import apiConfig from "../apiConfig";

import { DeleteDocumentRespType } from "../../model/api/document";

import { useProjectStore } from "../../store/workspace";

const useDeleteDocument = (
  file: string,
  directory: string,
  project: string
) => {
  const url = apiConfig.url.document.delete();
  const data = {
    file: file,
    directory: directory,
    project: project,
  };

  return axios
    .post(url, data)
    .then((res) => res.data as DeleteDocumentRespType)
    .then((data) => {
      useProjectStore.getState().deleteItem(file, directory);
      return data;
    });
};

export default useDeleteDocument;
