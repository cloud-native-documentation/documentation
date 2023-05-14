import React, { useState } from "react";

import { VscSave, VscSaveAs, VscHistory } from "react-icons/vsc";

import { ListGroup, Sidebar, Card, Button } from "flowbite-react";
import { HiHome, HiFolderOpen, HiOutlineArrowRight } from "react-icons/hi";

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
    <div className="flex w-2/12 flex-col items-center">
      <div className="h-full w-full bg-gray-300">
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

const ProjectSection: React.FC<{}> = () => {
  const clickProject = (e: { currentTarget: { id: any } }) => {
    console.log(e.currentTarget.id, "click project");
  };

  const ProjectCard: React.FC<{ title: string; text: string }> = (props) => {
    return (
      <Card className="w-11/12">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.text}
        </p>
        <Button onClick={clickProject} id={props.title}>
          Select
          <HiOutlineArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    );
  };

  return (
    <div className="flex w-3/12 flex-col items-center bg-red-400 py-3">
      <p>Project</p>
      <div className="flex flex-col items-center space-y-2 py-3">
        <ProjectCard title="Project 1" text="The describe message" />
        <ProjectCard title="Project 2" text="The describe message fro 2" />
      </div>
    </div>
  );
};

// File structure Brower
const FilesSection: React.FC<{ title: string }> = (props) => {
  const FilePanel: React.FC<{ title: string }> = (props) => {
    return (
      <div className="flex w-full flex-col items-center bg-blue-400 py-3">
        <p>{props.title}</p>
        <div className="w-11/12 py-3">
          <ListGroup>
            <ListGroup.Item active={true} icon={VscSave}>
              File-0
            </ListGroup.Item>
            <ListGroup.Item icon={VscSave}>File-1</ListGroup.Item>
            <ListGroup.Item icon={VscSave}>File-2</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  };

  return (
    <div className="m-0 flex h-full w-6/12 space-x-0 divide-x divide-gray-700 p-0">
      <FilePanel title="One" />
      <FilePanel title="Two" />
    </div>
  );
};

const PermissionSection: React.FC<{}> = (props) => {
  return (
    <div className="w-max flex-auto bg-orange-400 py-3 pl-3">
      <p>Permission Section</p>
    </div>
  );
};

// Main
const Workspace: React.FC<{}> = (props) => {
  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-700 text-xl">
      {/* <FunctionsSection title="Home" isFile={true} /> */}
      <SidebarSection title="Home" isFile={true} />

      <ProjectSection />

      <FilesSection title="File one" />
      {/* <FilesSection title="File two" /> */}

      <PermissionSection />
    </div>
  );
};

export default Workspace;
