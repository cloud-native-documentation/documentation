import axios from "axios";
import apiConfig from "../apiConfig";

import { CreateDirectoryRespType } from "../../model/api/document";

const useCreateDirectory = (directory: string, project: string) => {
  const url = apiConfig.url.directory.create();
  const data = {
    directory: directory,
    project: project,
  };

  return axios
    .post(url, data)
    .then((res) => res.data as CreateDirectoryRespType)
    .then((data) => {
      return data;
    });
};

export default useCreateDirectory;
