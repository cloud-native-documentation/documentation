import React, { useState, useRef } from "react";
import { ListGroup, Button, Modal, TextInput, Label } from "flowbite-react";
import { HiFolder, HiDocumentAdd, HiDocument } from "react-icons/hi";
import { BsFillBuildingFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BiShow } from "react-icons/bi";
import usePath from "../../store/explorer/usePath";
import {
  createDirectory,
  createDocument,
  useOldDocument,
} from "../../api/document";

import { useSelectProjectStore } from "../../store/explorer";
import { OldDocumentType } from "../../model/api/document";
import { mutate } from "swr";

const mutateAll = () => {
  mutate(() => true);
};

const AddModal: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  directory: string;
  level: number;
}> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { selectedProject } = useSelectProjectStore();

  const [isFile, setIsFile] = useState<boolean>(props.level > 1);
  const [isPublic, setIsPublic] = useState<string>("0");
  const [isPrivate, setIsPrivate] = useState<string>("0");

  const handleCreate = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current !== null) {
      if (isFile) {
        createDocument(
          ref["current"]["value"],
          props.directory,
          selectedProject,
          isPublic,
          isPrivate
        ).then((data) => {
          if (data.status === "success") {
            props.setShow(false);
            mutateAll();
          } else {
            alert("Create Failed");
          }
        }).catch((err) => {
          if (err.response.data.status) alert(err.response.data.status);
          else alert("Create Failed");
        });
      }
      if (!isFile) {
        createDirectory(ref["current"]["value"] + "/", selectedProject)
          .then((data) => {
            if (data.status === "success") {
              props.setShow(false);
              mutateAll();
            } else {
              alert("Create Failed");
            }
          })
          .catch((err) => {
            if (err.response.data.status) alert(err.response.data.status);
            else alert("Create Failed");
          });
      }
    } else alert("Must give name");
  };

  return (
    <Modal
      show={props.show}
      size="lg"
      popup={true}
      onClose={() => {
        props.setShow(false);
      }}
    >
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <div className="py-3"></div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Files or Directory
          </h3>
          <Button.Group>
            {props.level <= 1 ? (
              <Button
                title="Folder"
                onClick={() => {
                  setIsFile(false);
                }}
                color={isFile ? "gray" : "dark"}
              >
                <HiFolder className="mr-2 h-5 w-5" />
                Add Folder
              </Button>
            ) : (
              <></>
            )}
            <Button
              title="File"
              onClick={() => {
                setIsFile(true);
              }}
              color={!isFile ? "gray" : "dark"}
            >
              <HiDocument className="mr-2 h-5 w-5" />
              Add Document
            </Button>
          </Button.Group>
          {isFile && (
            <Button.Group>
              <Button
                title="Public"
                onClick={() => {
                  setIsPrivate("0");
                  setIsPublic("1");
                }}
                color={isPrivate === "0" && isPublic === "1" ? "dark" : "gray"}
              >
                <BiShow className="mr-2 h-5 w-5" />
                Public
              </Button>
              <Button
                title="Private"
                onClick={() => {
                  setIsPrivate("1");
                  setIsPublic("0");
                }}
                color={isPrivate === "1" && isPublic === "0" ? "dark" : "gray"}
              >
                <HiUser className="mr-2 h-5 w-5" />
                Private
              </Button>
              <Button
                title="Department"
                onClick={() => {
                  setIsPrivate("0");
                  setIsPublic("0");
                }}
                color={isPrivate === "0" && isPublic === "0" ? "dark" : "gray"}
              >
                <BsFillBuildingFill className="mr-2 h-5 w-5" />
                Department
              </Button>
            </Button.Group>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="filename" value="Name" />
            </div>
            <TextInput
              id="filename"
              placeholder="Name"
              required={true}
              ref={ref}
            />
          </div>

          <div className="flex w-full justify-start gap-4">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
                handleCreate(ref);
              }}
            >
              Create
            </Button>
            <Button
              color="gray"
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const Files: React.FC<{ selectProject: string }> = (props) => {
  const FilePanel: React.FC<{
    show: string;
    select: string;
    setNextPath: ((path: string) => void) | null;
    setSelect: (path: string) => void;
    files: OldDocumentType[];
    path: string;
    level: number;
  }> = (props) => {
    const [addShow, setAddshow] = useState<boolean>(false);
    const { setPathF, selectFile, setSelectFile, setSelectFileName } =
      usePath();

    return (
      <div className="flex w-full flex-col items-center py-3">
        <p>{props.show}</p>
        <div className="w-11/12 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-3">
            <div>
              <Button
                pill={true}
                onClick={() => {
                  setAddshow(true);
                }}
              >
                <AddModal
                  show={addShow}
                  setShow={setAddshow}
                  directory={props.path}
                  level={props.level}
                />
                Add
                <HiDocumentAdd className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
          <ListGroup className="dark:bg-blue-500">
            {props.files.map((file, index) => {
              if (!file.isFile) {
                return (
                  <ListGroup.Item
                    active={file.name == props.select}
                    icon={HiFolder}
                    onClick={() => {
                      props.setSelect(file.name);
                      if (props.setNextPath !== null)
                        props.setNextPath(file.name);
                      setSelectFile("0");
                      setSelectFileName(file.name);
                    }}
                    key={index}
                  >
                    {file.name.replace("/", "")}
                  </ListGroup.Item>
                );
              }
              return (
                <ListGroup.Item
                  active={file.id == selectFile}
                  icon={HiDocument}
                  onClick={() => {
                    if (props.level === 1) {
                      setPathF("/");
                      setPathS("");
                    }
                    setSelectFile(file.id);
                    setSelectFileName(file.name);
                  }}
                  key={index}
                >
                  {file.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    );
  };

  const { path_f, path_s, setPathF, setPathS } = usePath();

  const files1 = useOldDocument(
    props.selectProject,
    "/",
    props.selectProject !== ""
  );
  const files2 = useOldDocument(props.selectProject, path_s, path_s !== "");

  return (
    <div className="m-0 flex h-full w-full space-x-0 divide-x divide-gray-700 p-0">
      {files1.data !== undefined && (
        <FilePanel
          show={props.selectProject}
          select={path_f}
          setNextPath={setPathS}
          setSelect={setPathF}
          files={files1.data.documentlist}
          path={"/"}
          level={1}
        />
      )}
      {path_s != "" && files2.data !== undefined && (
        <FilePanel
          show={path_s}
          select={path_s}
          setNextPath={null}
          setSelect={setPathS}
          files={files2.data.documentlist}
          path={path_s}
          level={2}
        />
      )}
    </div>
  );
};

export default Files;
