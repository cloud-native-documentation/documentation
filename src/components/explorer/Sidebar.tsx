import React, { useState } from "react";
import {
  HiFolderOpen,
  HiHome,
  HiOutlineExclamationCircle,
  HiTrash,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import usePath from "../../store/explorer/usePath";
import { Button, Modal } from "flowbite-react";
import { deleteDirectory, deleteDocument } from "../../api/document";
import { useSelectProjectStore } from "../../store/explorer";
import { mutate } from "swr";

const mutateAll = () => {
  mutate(() => true);
};

const DeleteModeal: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const { selectFile, selectFileName, setPathF, setPathS, setSelectFile } =
    usePath();
  const { selectedProject } = useSelectProjectStore();
  const HandelDelete = () => {
    if (selectFile === "0") {
      deleteDirectory(selectFileName, selectedProject)
        .then((data) => {
          if (data.status === "success") {
            props.setShow(false);
            setPathF("/");
            setPathS("");
            setSelectFile("0");
            mutateAll();
          } else {
            alert("Delete Failed");
          }
        })
        .catch((err) => {
          if (err.response.data.status) alert(err.response.data.status);
          else alert("Delete Failed");
        });
    } else {
      deleteDocument(selectFile)
        .then((data) => {
          if (data.status === "success") {
            props.setShow(false);
            setSelectFile("0");
            mutateAll();
          } else {
            alert("Delete Failed");
          }
        })
        .catch((err) => {
          if (err.response.data.status) alert(err.response.data.status);
          else alert("Delete Failed");
        });
    }
  };

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
            Are you sure you want to delete {selectFileName}?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={(e) => {
                e.stopPropagation();
                props.setShow(false);
                HandelDelete();
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

const Sidebar: React.FC<{ title: string; isFile: boolean }> = () => {
  const { selectFile, path_f } = usePath();
  const [delShow, setDelshow] = useState<boolean>(false);

  return (
    <aside id="default-sidebar" className="w-38" aria-label="Sidebar">
      <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link to="/" className="flex items-center">
              <HiHome />
              <span className="ml-3">Home</span>
            </Link>
          </li>

          {selectFile !== "" && selectFile !== "0" && (
            <li>
              <Link
                to={`workspace/${selectFile}`}
                className="flex items-center"
              >
                <HiFolderOpen />
                <span className="ml-3">Open</span>
              </Link>
            </li>
          )}
          {(path_f != "/" || (selectFile !== "" && selectFile !== "0")) && (
            <li>
              <Button
                color="failure"
                onClick={() => {
                  setDelshow(true);
                }}
              >
                <HiTrash />
                <span className="ml-3">Delete</span>
              </Button>
              <DeleteModeal show={delShow} setShow={setDelshow} />
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
