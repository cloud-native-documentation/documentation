import React, { useState } from "react";
import { ListGroup, Button } from "flowbite-react";

import { HiFolder, HiDocumentAdd, HiMinusCircle } from "react-icons/hi";

const Files: React.FC<{ selectProject: string }> = (props) => {
  const FilePanel: React.FC<{
    path: string;
    select: string;
    setPath: React.Dispatch<React.SetStateAction<string>>;
    files: string[];
  }> = (props) => {
    return (
      <div className="flex w-full flex-col items-center py-3">
        <p>{props.path}</p>
        <div className="w-11/12 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
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

export default Files;
