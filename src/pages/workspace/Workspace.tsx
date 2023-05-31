import React from "react";
import { useParams } from "react-router";

import Project from "./Project";
import Tabs from "./Tabs";
import TextArea from "./TextArea";

const Workspace: React.FC = () => {
  const { projectID } = useParams();

  return (
    <>
      <Project projectID={projectID || ''}/>
      <Tabs />
      <TextArea />
    </>
  );
};

export default Workspace;
