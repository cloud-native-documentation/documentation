import React from "react";
import { ListGroup, Card, Button } from "flowbite-react";

import { HiDocumentAdd, HiMinusCircle } from "react-icons/hi";

const Projects: React.FC<{
  selectProject: string;
  setSelectProject: React.Dispatch<React.SetStateAction<string>>;
  projects: { title: string; describe: string }[];
  setProjects: React.Dispatch<
    React.SetStateAction<{ title: string; describe: string }[]>
  >;
}> = (props) => {
  const ProjectCard: React.FC<{
    title: string;
    text: string;
    selectedProject: string;
    setSelectdProject: React.Dispatch<React.SetStateAction<string>>;
  }> = (props) => {
    return (
      <ListGroup.Item
        active={props.selectedProject == props.title}
        className="flex items-center justify-center dark:bg-blue-300"
        onClick={() => {
          props.setSelectdProject(props.title);
        }}
      >
        <Card className="w-full dark:border-blue-600 dark:bg-transparent">
          <h5 className="dark: text-lg font-bold tracking-tight text-blue-700 dark:text-blue-500">
            {props.title}
          </h5>
          <p className="font-normal text-gray-500 dark:text-gray-500">
            {props.text}
          </p>
        </Card>
      </ListGroup.Item>
    );
  };

  return (
    <div className="w-42 flex flex-col items-center py-3">
      <p>Project</p>
      <div className="flex flex-wrap items-center gap-2 py-3">
        <div>
          <Button pill={true} onClick={() => alert("[TODO] Add")}>
            Add
            <HiDocumentAdd className="ml-1 h-5 w-5" />
          </Button>
        </div>
        <div>
          <Button
            pill={true}
            color={"failure"}
            onClick={() => alert("[TODO] Delete")}
          >
            Delete
            <HiMinusCircle className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex w-11/12 flex-col items-center justify-center">
        <ListGroup className="dark:bg-blue-500">
          {props.projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                text={project.describe}
                selectedProject={props.selectProject}
                setSelectdProject={props.setSelectProject}
                key={index}
              ></ProjectCard>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default Projects;
