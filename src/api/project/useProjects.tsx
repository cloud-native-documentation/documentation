// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { ProjectsResType } from "../../model/api/project";

const exampleProject: ProjectsResType = {
  status: "success",
  projectlist: ["Project 1", "Project 2", "Project 3"],
  describelist: [
    "Describe for Project 1, team EUV",
    "Private Project",
    "[Confidential] Project X",
  ],
};

const fetcher = ([url, namelist, describelist]: [
  string,
  string[],
  string[]
]) => {
  return exampleProject;
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
