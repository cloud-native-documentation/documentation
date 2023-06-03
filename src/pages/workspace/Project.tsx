import React from "react";

import { Button, Sidebar } from "flowbite-react";

import {
  useDocuments,
  useCreateDocument,
  useDeleteDocument,
} from "../../api/document";

import { useTabsStore } from "../../store/workspace";

const Projects: React.FC<{ projectID: string }> = ({ projectID }) => {
  const { addTab } = useTabsStore();
  const documents = useDocuments(projectID, "/NYCU/", true);

  if (documents.error) {
    return <>Error fetching documents</>;
  }

  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  const HandleCreateDocument = () => {
    useCreateDocument("file2", "/NYCU/", projectID, "0", "1").then(
      (data) => console.log(data)
    );
  };

  const HandleDeleteDocument = () => {
    useDeleteDocument("file2", "/NYCU/", projectID).then((data) =>
      console.log(data)
    );
  };

  return (
    <div className="h-full w-full">
      <>{projectID}</>
      <Button onClick={HandleCreateDocument}>add</Button>
      <Button onClick={HandleDeleteDocument}>delete</Button>
      <Sidebar className="rounded-none">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {documents.data?.documentlist?.map((document: string) => (
              <Sidebar.Item
                className="hover:bg-violet-200"
                key={document}
                onClick={() => addTab(document)}
              >
                {document}
              </Sidebar.Item>
            ))}
            {/* <Sidebar.Collapse label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Projects;
