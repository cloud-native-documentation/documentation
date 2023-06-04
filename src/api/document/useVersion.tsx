import axios from "axios";
import useSWR from "swr";
import apiConfig from "../apiConfig";

import { HistoryRespType } from "../../model/api/document";

const fetcher = ([url, fileID]: [string, string]): Promise<HistoryRespType> => {
  const data = { id: fileID };
  return axios.post(url, data).then((res) => res.data as HistoryRespType);
};

const useVersion = (fileID: string, loadVerison: boolean) => {
  return useSWR(
    loadVerison ? [apiConfig.url.document.history(), fileID] : null,
    fetcher
  );
};

export default useVersion;
