import React from "react";

import { Button, Sidebar } from "flowbite-react";

import {
  useDocuments,
  useCreateDocument,
  useDeleteDocument,
} from "../../api/document";

import { useProjectStore, useTabsStore } from "../../store/workspace";

const Projects: React.FC<{ projectID: string }> = ({ projectID }) => {
  const { addTab } = useTabsStore();
  const { projectFiles } = useProjectStore();
  const documents = useDocuments(projectID, "/", true);

  if (documents.error) {
    return <>Error fetching documents</>;
  }

  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  const HandleCreateDocument = () => {
    useCreateDocument("file2", "/NYCU/", projectID, "0", "1");
  };

  const HandleDeleteDocument = () => {
    useDeleteDocument("file2", "/NYCU/", projectID);
  };

  return (
    <div className="h-full w-full">
      <>{projectID}</>
      <Button onClick={HandleCreateDocument}>add</Button>
      <Button onClick={HandleDeleteDocument}>delete</Button>
      <Sidebar className="rounded-none">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {projectFiles.map((element) =>
              element.isFile ? (
                <Sidebar.Item
                  className="hover:bg-violet-200"
                  key={element.name}
                  onClick={() => addTab(element.name)}
                >
                  {element.name}
                </Sidebar.Item>
              ) : (
                <Sidebar.Collapse key={element.name} label={element.name}>
                  {element.children?.map((e) => (
                    <Sidebar.Item key={e.name} onClick={() => addTab(e.name)}>
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
