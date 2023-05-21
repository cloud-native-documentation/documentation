// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";

// const fetcher = ([url]: [string]) => axios.get(url).then((res) => res.data)

type HistoryAction = {
  filepath: string;
  data: null;
};

const exampleData = function (version: string): HistoryAction[] {
  return [
    {
      filepath: `File1(${version})`,
      data: null,
    },
    {
      filepath: `File2(${version})`,
      data: null,
    },
    {
      filepath: `File3(${version})`,
      data: null,
    },
  ];
};
const fetcher = ([url, version]: [string, string]) => {
  console.log(url);
  return exampleData(version);
};
const useHistoryActions = (loadVersions: boolean, version: string) =>
  useSWR(
    loadVersions ? [apiConfig.url.document.historyActions(), version] : null,
    fetcher
  );

export default useHistoryActions;
