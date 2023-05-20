// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";

// const fetcher = ([url]: [string]) => axios.get(url).then((res) => res.data)

const exampleData: string[] = ["File1", "File2", "File3", "File4"];
const fetcher = ([url]: [string]) => {
  console.log(url);
  return exampleData;
}
const useDocuments = (loadDocuments: boolean) =>
  useSWR(loadDocuments ? [apiConfig.url.document.list()] : null, fetcher);

export default useDocuments;
