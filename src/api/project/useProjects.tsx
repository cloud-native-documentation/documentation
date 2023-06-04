// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { ProjectsResType } from "../../model/api/project";

const exampleProject: ProjectsResType = {
  status: "success",
  projectlist: [
    {
      name: "Project 1",
      describe: "Describe for Project 1, team EUV",
    },
  ],
};

const fetcher = ([url]: [string]) => {
  return exampleProject.projectlist;
  console.log(url);
  // return namelist !== null
  //   ? ({
  //       status: "success",
  //       projectlist: namelist,
  //       describelist: describelist,
  //     } as ProjectsResType)
  //   : null;
};
const useProjects = () => useSWR([apiConfig.url.project.list()], fetcher);

export default useProjects;
