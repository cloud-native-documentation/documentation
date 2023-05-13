import React, { useState } from "react";

import { VscSave, VscSaveAs, VscHistory } from "react-icons/vsc";

import { ListGroup, Sidebar } from "flowbite-react";
import { HiHome, HiFolderOpen } from "react-icons/hi";

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
  return (
    <div className="w-3/12 bg-red-400 py-3 pl-3">
      <p>Project</p>
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
