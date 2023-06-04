// import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Files from "./Files";
import Detail from "./Detail";

import { useProjects } from "../../api/project";

import { useSelectProjectStore } from "../../store/explorer";

const Explorer: React.FC = () => {
  const { selectedProject } = useSelectProjectStore();

  const projects = useProjects();
  const projectData: { title: string; describe: string }[] = [];
  projects.data?.projectlist.forEach((title, index) => {
    projectData.push({
      title: title,
      describe: projects.data?.describelist[index] as string,
    });
  });

  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-600 bg-blue-100 text-xl">
      <Sidebar title="Home" isFile={true} />
      <Projects selectProject={selectedProject} projects={projectData} />
      <Files selectProject={selectedProject} />
      <Detail selectProject={selectedProject} />
    </div>
  );
};

export default Explorer;
