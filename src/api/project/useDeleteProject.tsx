import axios from "axios";
import apiConfig from "../apiConfig";

import { DeleteDocumentRespType } from "../../model/api/document";

const deleteProject = (project: string) => {
  const url = apiConfig.url.project.delete();
  const data = {
    project: project,
  };

  return axios
    .post(url, data)
    .then((res) => res.data as DeleteDocumentRespType)
    .then((data) => {
      return data;
    });
};

export default deleteProject;
