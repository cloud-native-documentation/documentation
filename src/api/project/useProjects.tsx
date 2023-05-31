// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { ProjectsResType } from "../../model/api/project";

const fetcher = ([url, namelist, describelist]: [
  string,
  string[],
  string[]
]) => {
  console.log(url);
  return namelist !== null
    ? ({
        status: "success",
        projectlist: namelist,
        describelist: describelist,
      } as ProjectsResType)
    : null;
};
const useProjects = () => useSWR([apiConfig.url.project.list()], fetcher);

export default useProjects;
