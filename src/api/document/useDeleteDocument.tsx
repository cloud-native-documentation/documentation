import axios from "axios";
import apiConfig from "../apiConfig";

import { DeleteDocumentRespType } from "../../model/api/document";

const deleteDocument = (id: string) => {
  const url = apiConfig.url.document.delete();
  const data = {
    id: id,
  };

  return axios
    .post(url, data)
    .then((res) => res.data as DeleteDocumentRespType)
    .then((data) => {
      return data;
    });
};

export default deleteDocument;
