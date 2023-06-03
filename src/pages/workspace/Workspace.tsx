import React from "react";
import { useParams } from "react-router";

import Project from "./Project";
import Tabs from "./Tabs";
import TextArea from "./TextArea";


const Workspace: React.FC = () => {
  const { projectID } = useParams();

  return (
    <>
      <div className="absolute flex h-full w-full">
        <div className="w-38 flex flex-col items-center bg-white text-xl">
          <Project projectID={projectID || ""} />
        </div>
        <div className="items-centertext-xl flex w-full flex-col bg-violet-100">
          <div className="h-full w-full">
            <Tabs />
            <TextArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace;
