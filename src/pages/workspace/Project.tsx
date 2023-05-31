import React from "react";

import { useDocuments } from "../../api/document";

import { useTabsStore } from "../../store/workspace";

const Projects: React.FC = () => {
  const documents = useDocuments(true);

  const { addTab } = useTabsStore();

  if (documents.error) {
    return <>Error fetching documents</>;
  }
  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  return (
    <>
      {documents.data?.documentlist?.map((document: string) => (
        <button key={document} onClick={() => addTab(document)}>
          {document}
        </button>
      ))}
    </>
  );
};

export default Projects;