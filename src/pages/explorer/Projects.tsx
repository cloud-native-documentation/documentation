import React, { useState, useRef } from "react";
import {
  ListGroup,
  Card,
  Button,
  Modal,
  TextInput,
  Label,
  Tabs,
} from "flowbite-react";

import { HiMinusCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { HiFolderPlus } from "react-icons/hi2";
import { AiFillLock, AiOutlineTeam } from "react-icons/ai";
import { BsBuildingFill } from "react-icons/bs";

import { useSelectProjectStore } from "../../store/explorer";

const ProjectCard: React.FC<{
  title: string;
  text: string;
  // selectedProject: string;
  // setSelectdProject: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const { selectedProject, setSelectedProject } = useSelectProjectStore();

  return (
    <ListGroup.Item
      active={selectedProject == props.title}
      className="flex items-center justify-center dark:bg-blue-300"
      onClick={() => {
        setSelectedProject(props.title);
      }}
    >
      <Card className="w-full dark:border-blue-600 dark:bg-transparent">
        <h5 className="dark: text-lg font-bold tracking-tight text-blue-700 dark:text-blue-500">
          {props.title}
        </h5>
        <p className="font-normal text-gray-500 dark:text-gray-500">
          {props.text}
        </p>
      </Card>
    </ListGroup.Item>
  );
};

const DeleteModal: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectProject: string;
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
      <Modal.Body>
        <div className="text-center">
          <div className="py-3"></div>
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete <b>{props.selectProject}</b>
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
                alert("[TODO] Delete");
                console.log("delete", props.selectProject);
              }}
            >
              Yes, I'm sure
            </Button>
            <Button
              color="gray"
              onClick={(e) => {
                e.stopPropagation();
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

const AddModal: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Modal
      show={props.show}
      size="md"
      onClose={() => {
        props.setShow(false);
        if (ref.current != null) ref.current.value = "";
      }}
    >
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <div className="py-1"></div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Create Project
          </h3>
          <Tabs.Group aria-label="Tabs with icons" style="underline">
            <Tabs.Item active={true} title="Private" icon={AiFillLock}>
              Only you can view and edit.
            </Tabs.Item>
            <Tabs.Item title="Team" icon={AiOutlineTeam}>
              Only your team and you can view and edit.
            </Tabs.Item>
            <Tabs.Item title="Global" icon={BsBuildingFill}>
              All of the member in the company can view and edit.
            </Tabs.Item>
          </Tabs.Group>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="projectName" value="Name" />
            </div>
            <TextInput
              id="ProjectName"
              placeholder="IC N3 Develope"
              required={true}
              ref={ref}
            />
          </div>

          <div className="flex w-full justify-start gap-4">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);

                if (ref.current != null) {
                  const projectName: string = ref.current["value"];

                  if (projectName === "") {
                    alert("Project Name not given!");
                    return;
                  }

                  alert("[TODO] New Project: " + projectName);
                  ref.current.value = "";
                }
              }}
            >
              Create
            </Button>
            <Button
              color="gray"
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
                if (ref.current != null) ref.current.value = "";
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

const Projects: React.FC<{
  selectProject: string;
  projects: { title: string; describe: string }[];
}> = (props) => {
  const [delShow, setDelshow] = useState<boolean>(false);
  const [addShow, setAddshow] = useState<boolean>(false);

  return (
    <div className="flex w-3/12 flex-col items-center py-3">
      <p>Project</p>
      <div className="flex flex-wrap items-center gap-2 py-3">
        <div>
          <Button pill={true} onClick={() => setAddshow(true)}>
            New
            <HiFolderPlus className="ml-1 h-5 w-5" />
            <AddModal show={addShow} setShow={setAddshow} />
          </Button>
        </div>
        <div>
          <Button
            pill={true}
            color={"failure"}
            onClick={() => setDelshow(true)}
          >
            Delete
            <HiMinusCircle className="ml-1 h-5 w-5" />
            <DeleteModal
              show={delShow}
              setShow={setDelshow}
              selectProject={props.selectProject}
            />
          </Button>
        </div>
      </div>
      <div className="flex w-11/12 flex-col items-center justify-center">
        <ListGroup className="dark:bg-blue-500">
          {props.projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.title}
                text={project.describe}
                key={index}
              ></ProjectCard>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default Projects;
