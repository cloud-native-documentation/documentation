// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { FileType } from "../../interfaces/workspace/file";

// const fetcher = ([url, filepath]: [string, string]) =>
//   axios.get(url).then((res) => res.data);

const fetcher = ([url, filepath]: [string, string]) => {
  console.log(url);
  return filepath !== ""
    ? ({ filename: filepath, content: filepath } as FileType)
    : null;
}
const useDocument = (loadDocument: boolean, filepath: string) =>
  useSWR(
    loadDocument ? [apiConfig.url.document.view(), filepath] : null,
    fetcher
  );

export default useDocument;
