import React, { useState } from "react";
import { ListGroup, Button, Modal } from "flowbite-react";

import {
  HiFolder,
  HiDocumentAdd,
  HiMinusCircle,
  HiDocument,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

const DeleteModeal: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectFile: string;
}> = (props) => {
  return (
    <Modal
      show={props.show}
      size="md"
      popup={true}
      onClose={() => {
        props.setShow(false);
      }}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete {props.selectFile}?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                props.setShow(false);
                alert("[TODO] Delete");
                console.log("delete", props.selectFile);
              }}
            >
              Yes, I'm sure
            </Button>
            <Button
              color="gray"
              onClick={() => {
                props.setShow(false);
              }}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Files: React.FC<{ selectProject: string }> = (props) => {
  const FilePanel: React.FC<{
    path: string;
    select: string;
    setPath: React.Dispatch<React.SetStateAction<string>>;
    files: string[];
  }> = (props) => {
    const [delShow, setDelshow] = useState<boolean>(false);

    return (
      <div className="flex w-full flex-col items-center py-3">
        <p>{props.path}</p>
        <div className="w-11/12 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
            <div>
              <Button
                pill={true}
                onClick={() => {
                  alert("[TODO] Add");
                }}
              >
                Add
                <HiDocumentAdd className="ml-1 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Button
                pill={true}
                color={"failure"}
                onClick={() => {
                  console.log("trigger");
                  setDelshow(!delShow);
                }}
              >
                <DeleteModeal
                  show={delShow}
                  setShow={setDelshow}
                  selectFile={props.select}
                />
                Delete
                <HiMinusCircle className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
          <ListGroup className="dark:bg-blue-500">
            {props.files.map((file, index) => {
              if (file.endsWith("/")) {
                return (
                  <ListGroup.Item
                    active={file == props.select}
                    icon={HiFolder}
                    onClick={() => {
                      props.setPath(file);
                    }}
                    key={index}
                  >
                    {file.replace("/", "")}
                  </ListGroup.Item>
                );
              }
              return (
                <ListGroup.Item
                  active={file == props.select}
                  icon={HiDocument}
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
  const [dir2Path, setDir2Path] = useState<string>("Dir1/");

  const files1 = ["Dir1/", "Dir2/", "Dir3/"];
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
