import React, { useState } from "react";

import Projects from "./Projects";
import TextArea from "./TextArea";

const Workspace: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [tabFiles, setTabFiles] = useState<string[]>([]);

  const addFileToTab = (file: string) => setTabFiles([...tabFiles, file]);
  const removeFileFromTab = (file: string) =>
    setTabFiles(tabFiles.filter((_file) => _file !== file));

  return (
    <>
      <Projects addFileToTab={addFileToTab} />
      {tabFiles.map((file) => (
        <>
          <button onClick={() => setSelectedFile(file)}>{file}</button>
          <button onClick={() => removeFileFromTab(file)}>x</button>
        </>
      ))}
      <TextArea selectedFile={selectedFile} />
    </>
  );
};

export default Workspace;
