// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";

// const fetcher = ([url]: [string]) => axios.get(url).then((res) => res.data)

const exampleData: string[] = ["1.0", "2.0", "3.0", "4.0"];
const fetcher = ([url]: [string]) => {
  console.log(url);
  return exampleData;
};
const useVersions = (loadVersions: boolean) =>
  useSWR(loadVersions ? [apiConfig.url.document.version()] : null, fetcher);

export default useVersions;
