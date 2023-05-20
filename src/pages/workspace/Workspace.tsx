import React from "react";

import Projects from "./Projects";
import TextArea from "./TextArea";

import { useTabsStore, useFileStore } from "../../store/workspace";

const Workspace: React.FC = () => {
  const { tabs, removeTab } = useTabsStore();
  const { selectFile } = useFileStore();

  return (
    <>
      <Projects />
      {tabs.map((tab) => (
        <div key={tab}>
          <button onClick={() => selectFile(tab)}>{tab}</button>
          <button onClick={() => removeTab(tab)}>(x)</button>
        </div>
      ))}
      <TextArea />
    </>
  );
};

export default Workspace;
