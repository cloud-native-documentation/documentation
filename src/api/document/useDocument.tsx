// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { DocumentRespType } from "../../model/api/document";

// const fetcher = ([url, filepath]: [string, string]) =>
//   axios.get(url).then((res) => res.data as DocumentRespType);

const fetcher = ([url, filepath]: [string, string]) => {
  console.log(url);
  return filepath !== ""
    ? ({ status: "success", content: filepath } as DocumentRespType)
    : null;
};
const useDocument = (loadDocument: boolean, filepath: string) =>
  useSWR(
    loadDocument ? [apiConfig.url.document.view(), filepath] : null,
    fetcher
  );

export default useDocument;
