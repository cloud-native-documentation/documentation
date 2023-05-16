import React, { useState } from "react";

import { VscSave, VscSaveAs, VscHistory } from "react-icons/vsc";

import { ListGroup, Sidebar, Card, Button } from "flowbite-react";
import {
  HiHome,
  HiFolder,
  HiFolderOpen,
  HiDocumentAdd,
  HiMinusCircle,
  HiUser,
} from "react-icons/hi";

import { VscEdit } from "react-icons/vsc";
import { BiShow } from "react-icons/bi";

const SidebarSection: React.FC<{ title: string; isFile: boolean }> = (
  props
) => {
  const clickButton = (e: { currentTarget: { id: any } }) => {
    console.log(e.currentTarget.id, "click");
  };

  const MySideItem: React.FC<{ title: string; icon: any }> = (props) => {
    return (
      <Sidebar.Item
        href="#"
        id={props.title}
        icon={props.icon}
        onClick={clickButton}
      >
        {props.title}
      </Sidebar.Item>
    );
  };

  return (
    <div className="w-38 flex flex-col items-center">
      <div className="h-full w-full">
        <Sidebar aria-label="Sidebar" className="w-full">
          <Sidebar.Items>
            <Sidebar.Logo href="/" img="vite.svg" imgAlt="TSMC">
              TSMC
            </Sidebar.Logo>
            <Sidebar.ItemGroup>
              <MySideItem title="Home" icon={HiHome} />
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <MySideItem title="Open" icon={HiFolderOpen} />
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <MySideItem title="Save" icon={VscSave} />
              <MySideItem title="Save As" icon={VscSaveAs} />
              <MySideItem title="History" icon={VscHistory} />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

const ProjectSection: React.FC<{
  selectProject: string;
  setSelectProject: any;
  projects: { title: string; describe: string }[];
  setProjects: any;
}> = (props) => {
  const ProjectCard: React.FC<{
    title: string;
    text: string;
    selectedProject: string;
    setSelect: any;
  }> = (props) => {
    return (
      <ListGroup.Item
        active={props.selectedProject == props.title}
        className="flex items-center justify-center dark:bg-blue-300"
        onClick={() => {
          props.setSelect(props.title);
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
          <Button pill={true} onClick={() => {}}>
            Add
            <HiDocumentAdd className="ml-1 h-5 w-5" />
          </Button>
        </div>
        <div>
          <Button pill={true} color={"failure"} onClick={() => {}}>
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
                setSelect={props.setSelectProject}
                key={index}
              ></ProjectCard>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

// File structure Brower
const FilesSection: React.FC<{ selectProject: string }> = (props) => {
  const FilePanel: React.FC<{
    path: string;
    select: string;
    setPath: any;
    files: string[];
  }> = (props) => {
    return (
      <div className="flex w-full flex-col items-center py-3">
        <p>{props.path}</p>
        <div className="w-11/12 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
            <div>
              <Button pill={true} onClick={() => {}}>
                Add
                <HiDocumentAdd className="ml-1 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Button pill={true} color={"failure"} onClick={() => {}}>
                Delete
                <HiMinusCircle className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
          <ListGroup className="dark:bg-blue-500">
            {props.files.map((file, index) => {
              return (
                <ListGroup.Item
                  active={file == props.select}
                  icon={HiFolder}
                  onClick={() => {
                    props.setPath(file);
                  }}
                  key={index}
                >
                  {file}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    );
  };
  const [dir3Path, setDir3Path] = useState<string>("");
  const [dir2Path, setDir2Path] = useState<string>("Dir1");

  const files1 = ["Dir1", "Dir2", "Dir3"];
  const files2 = ["File A", "File B", "File C", "File D"];

  return (
    <div className="m-0 flex h-full w-5/12 space-x-0 divide-x divide-gray-700 p-0">
      <FilePanel
        path={props.selectProject}
        select={dir2Path}
        setPath={setDir2Path}
        files={files1}
      />
      <FilePanel
        path={dir2Path}
        select={dir3Path}
        setPath={setDir3Path}
        files={files2}
      />
    </div>
  );
};

const PermissionSection: React.FC<{
  selectProject: string;
  setSelectProject: any;
}> = (props) => {
  const RoleItem: React.FC<{ name: string; role: string }> = (props) => {
    return (
      <ListGroup.Item
        onClick={() => {
          console.log("user click", props.name);
        }}
      >
        <div className="flex w-full justify-between">
          <p>{props.name}</p>
          {props.role == "edit" && <VscEdit className="h-5 w-5" />}
          {props.role == "owner" && <HiUser className="h-5 w-5" />}
          {props.role == "view" && <BiShow className="h-5 w-5" />}
        </div>
      </ListGroup.Item>
    );
  };

  return (
    <div className="flex grow flex-col items-center py-3">
      <div className="w-11/12 py-3">
        <Card className="dark:bg-blue-400">
          <p className="text-xl font-bold">{props.selectProject}</p>
          <ListGroup>
            <RoleItem name="Person A" role={"owner"} />
            <RoleItem name="Person B" role={"edit"} />
            <RoleItem name="Person C" role={"view"} />
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

// Main
const Workspace: React.FC<{}> = (props) => {
  const [selectedProject, setSelectedProject] = useState<string>("Project 1");
  const [projects, setProjects] = useState<
    { title: string; describe: string }[]
  >([
    { title: "Project 1", describe: "The statement for project 1" },
    { title: "Project 2", describe: "Project 2 for team Apple" },
    { title: "Project X", describe: "[Confidential] Project X" },
  ]);

  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-600 bg-blue-100 text-xl">
      <SidebarSection title="Home" isFile={true} />
      <ProjectSection
        selectProject={selectedProject}
        setSelectProject={setSelectedProject}
        projects={projects}
        setProjects={setProjects}
      />
      <FilesSection selectProject={selectedProject} />
      <PermissionSection
        selectProject={selectedProject}
        setSelectProject={setSelectedProject}
      />
    </div>
  );
};

export default Workspace;
