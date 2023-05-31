import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Files from "./Files";
import Detail from "./Detail";

import { useProjects } from "../../api/project";

const Explorer: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>("Project 1");
  const [projects, setProjects] = useState<
    { title: string; describe: string }[]
  >([
    { title: "Project 1", describe: "The statement for project 1" },
    { title: "Project 2", describe: "Project 2 for team Apple" },
    { title: "Project X", describe: "[Confidential] Project X" },
  ]);

  // const projects = useProjects();
  // data, isLoading, error

  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-600 bg-blue-100 text-xl">
      <Sidebar title="Home" isFile={true} />
      <Projects
        selectProject={selectedProject}
        setSelectProject={setSelectedProject}
        projects={projects}
        setProjects={setProjects}
      />
      <Files selectProject={selectedProject} />
      <Detail
        selectProject={selectedProject}
        setSelectProject={setSelectedProject}
      />
    </div>
  );
};

export default Explorer;
