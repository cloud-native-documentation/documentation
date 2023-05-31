import React from "react";

import { Sidebar } from "flowbite-react";

import { useDocuments } from "../../api/document";

import { useTabsStore } from "../../store/workspace";

const Projects: React.FC<{ projectID: string }> = ({ projectID }) => {
  const documents = useDocuments(true);

  const { addTab } = useTabsStore();

  if (documents.error) {
    return <>Error fetching documents</>;
  }
  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  return (
    <div className="h-full w-full">
      <>{projectID}</>
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
