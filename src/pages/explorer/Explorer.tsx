// import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Files from "./Files";
import Detail from "./Detail";

import { useProjects } from "../../api/project";

import { useSelectProjectStore } from "../../store/explorer";
import { useEffect, useState } from "react";
import { ProjectType } from "../../model/api/project";

const Explorer: React.FC = () => {
  const { selectedProject } = useSelectProjectStore();
  const [projectData, setProjectData] = useState<ProjectType[]>([]);

  const projects = useProjects();
  useEffect(() => {
    if (projects.isLoading || projects.error || projects.data === undefined)
      return;
    console.log(projects.isLoading);
    const new_data: ProjectType[] = [];
    projects.data.forEach((project) => {
      new_data.push(project);
    });
    setProjectData(new_data);
  }, [projects.isLoading, projects.error, projects.data]);

  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-600 bg-blue-100 text-xl">
      <Sidebar title="Home" isFile={true} />
      <Projects
        selectProject={selectedProject}
        // setSelectProject={setSelectedProject}
        projects={projectData}
        // setProjects={setProjects}
      />
      <Files selectProject={selectedProject} />
      <Detail
        selectProject={selectedProject}
        // setSelectProject={setSelectedProject}
      />
    </div>
  );
};

export default Explorer;
