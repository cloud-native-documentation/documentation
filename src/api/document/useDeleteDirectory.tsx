import axios from "axios";
import apiConfig from "../apiConfig";

import { DeleteDirectoryRespType } from "../../model/api/document";

const useDeleteDirectory = (directory: string, project: string) => {
  const url = apiConfig.url.directory.delete();
  const data = {
    directory: directory,
    project: project
  };

  return axios
    .post(url, data)
    .then((res) => res.data as DeleteDirectoryRespType)
    .then((data) => {
      return data;
    });
};

export default useDeleteDirectory;
