export interface ProjectType {
  name: string;
  describe: string;
}

export interface ProjectsResType {
  status: string;
  projectlist: ProjectType[];
}

export interface ProjectResType {
  status: string;
  name: string;
  describe: string;
}
