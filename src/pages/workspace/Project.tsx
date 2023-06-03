import { FormEvent, useEffect } from "react";

import { Button, Sidebar } from "flowbite-react";

import {
  useDocuments,
  useCreateDocument,
  useDeleteDocument,
} from "../../api/document";

import { useProjectStore, useFileStore } from "../../store/workspace";

const Projects: React.FC<{ projectID: string }> = ({ projectID }) => {
  const { selectFile } = useFileStore();
  const { projectFiles } = useProjectStore();
  const documents = useDocuments(projectID, "/", true);
  const {
    trigger: triggerCreateDocument,
    error: errorCreateDocument,
    isMutating: isMutatingCreateDocument,
  } = useCreateDocument();

  // useEffect(() => {
  //   if (documents.error) {
  //     alert(documents.error.message);
  //   }
  // }, [documents.error]);

  useEffect(() => {
    if (errorCreateDocument) {
      alert(errorCreateDocument.message);
    }
  }, [errorCreateDocument]);

  if (documents.error) {
    return <>Error fetching documents</>;
  }

  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  const HandleCreateDocument = (e: FormEvent<HTMLFormElement>) => {
    if (!e.currentTarget.checkValidity()) return e.preventDefault();
    e.preventDefault();
    triggerCreateDocument({
      file: e.currentTarget.filename.value,
      directory: "/NYCU/",
      project: projectID,
      isPublic: "0",
      isPrivate: "1",
    });
  };

  const HandleDeleteDocument = () => {
    useDeleteDocument("file2", "/NYCU/", projectID);
  };

  return (
    <div className="h-full w-full">
      <>{projectID}</>

      <form className="flex items-center" onSubmit={HandleCreateDocument}>
        <div className="mb-3 mr-4">
          <input
            type="text"
            name="filename"
            id="filename"
            placeholder="filename"
            className="mt-1 w-full rounded border border-gray-300 py-2 pl-3 outline-none ring-indigo-600 focus:ring-indigo-600"
            required
          />
        </div>
        <button
          className="mt-4 rounded-lg bg-blue-500 p-2 hover:bg-blue-600 "
          style={{ height: "45px" }}
          disabled={isMutatingCreateDocument}
        >
          <span className="text-white">Create</span>
        </button>
      </form>
      {/* <Button onClick={HandleCreateDocument}>add</Button> */}
      <Button onClick={HandleDeleteDocument}>delete</Button>
      <Sidebar className="rounded-none">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {projectFiles.map((element) =>
              element.isFile ? (
                <Sidebar.Item
                  className="hover:bg-violet-200"
                  key={element.name}
                  onClick={() => selectFile(element.name)}
                >
                  {element.name}
                </Sidebar.Item>
              ) : (
                <Sidebar.Collapse key={element.name} label={element.name}>
                  {element.children?.map((e) => (
                    <Sidebar.Item key={e.name} onClick={() => selectFile(e.name)}>
                      {e.name}
                    </Sidebar.Item>
                  ))}
                </Sidebar.Collapse>
              )
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Projects;
