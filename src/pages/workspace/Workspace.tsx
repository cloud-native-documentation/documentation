import React from "react";

import Project from "./Project";
import Tabs from "./Tabs";
import TextArea from "./TextArea";

const Workspace: React.FC = () => {
  return (
    <>
      <Project />
      <Tabs />
      <TextArea />
    </>
  );
};

export default Workspace;
