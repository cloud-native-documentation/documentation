import React, { useState, useRef, FormEvent } from "react";
import {
  ListGroup,
  Card,
  Button,
  Modal,
  TextInput,
  Label,
} from "flowbite-react";

import { HiMinusCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { HiFolderPlus } from "react-icons/hi2";

import { useSelectProjectStore } from "../../store/explorer";
import { useProjects } from "../../api/project";
import { deleteProject, createProject } from "../../api/project/useProject";
import { ProjectType } from "../../model/api/project";

const ProjectCard: React.FC<{
  title: string;
  text: string;
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
  const { clearSelectedProject } = useSelectProjectStore();
  const { mutate } = useProjects();
  function handleDelete() {
    deleteProject(props.selectProject)
      .then((data) => {
        if (data.status === "success") {
          props.setShow(false);
          clearSelectedProject();
          mutate();
        } else {
          alert("Delete Failed");
        }
      })
      .catch((err) => {
        if (err.response.data.status) alert(err.response.data.status);
        else alert("Delete Failed");
      });
  }
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
                handleDelete();
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
  const { mutate } = useProjects();
  const ref = useRef<HTMLFormElement>(null);
  function _createProject(e: FormEvent<HTMLFormElement>) {
    if (!e.currentTarget.checkValidity()) return e.preventDefault();
    e.preventDefault();
    const name = e.currentTarget.ProjectName.value;
    const description = e.currentTarget.ProjectDescription.value;
    const form = e.currentTarget;
    createProject(name, description)
      .then(() => {
        props.setShow(false);
        form.reset();
        mutate();
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data?.status) alert(err.response.data.status);
        } else alert("Creation Failed");
      });
  }
  return (
    <Modal
      show={props.show}
      size="md"
      onClose={() => {
        props.setShow(false);
      }}
    >
      <Modal.Body>
        <form
          className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
          onSubmit={_createProject}
          ref={ref}
        >
          <div className="py-1"></div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Create Project
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="projectName" value="Name" />
            </div>
            <TextInput
              id="ProjectName"
              placeholder="IC N3 Develope"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="projectName" value="Description" />
            </div>
            <TextInput
              id="ProjectDescription"
              placeholder="IC N3 Developement Project"
              required={true}
            />
          </div>

          <div className="flex w-full justify-start gap-4">
            <Button type="submit">Create</Button>
            <Button
              color="gray"
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
                ref.current?.reset();
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const Projects: React.FC<{
  selectProject: string;
  projects: ProjectType[];
}> = (props) => {
  const [delShow, setDelshow] = useState<boolean>(false);
  const [addShow, setAddshow] = useState<boolean>(false);

  return (
    <div className="flex w-4/12 flex-col items-center py-3">
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
      <div
        className="w-11/12 flex-col items-center justify-center"
        style={{ overflow: "auto" }}
      >
        <ListGroup className="dark:bg-blue-500">
          {props.projects.map((project, index) => {
            return (
              <ProjectCard
                title={project.name}
                text={project.description}
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
