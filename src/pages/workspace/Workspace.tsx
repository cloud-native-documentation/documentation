import React from "react";

import Projects from "./Projects";
import TextArea from "./TextArea";

import { FileType } from "../../interfaces/workspace/file";

import { useTabsStore, useFileStore } from "../../store/workspace";

const Workspace: React.FC = () => {
  const { tabs, addTab, removeTab } = useTabsStore();
  const { file, selectFile } = useFileStore();
  const files: { [id: string]: FileType } = {
    File1: {
      filename: "File 1",
      content: "Content 1",
    },
    File2: {
      filename: "File 2",
      content: "Content 2",
    },
    File3: {
      filename: "File 3",
      content: "Content 3",
    },
    File4: {
      filename: "File 4",
      content: "Content 4",
    },
  };

  return (
    <>
      <Projects addFileToTab={addTab} />
      {tabs.map((tab) => (
        <div key={tab}>
          <button onClick={() => selectFile(files[tab])}>{tab}</button>
          <button onClick={() => removeTab(tab)}>(x)</button>
        </div>
      ))}
      <TextArea selectedFile={file.content} />
    </>
  );
};

export default Workspace;
