// import axios from 'axios'
import useSWR from "swr";
import apiConfig from "../apiConfig";
import { ProjectType } from "../../model/api/project";
import axios from "axios";


const getProjects = () => {
  const url = apiConfig.url.project.list();
  return axios
    .get(url)
    .then((res) => res.data.projectlist as ProjectType[])
};


const useProjects = () =>
  useSWR(apiConfig.url.document.view(), getProjects);

export default useProjects;