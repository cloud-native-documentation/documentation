import React, { useState } from "react";

import { useDocuments } from "../../api/document";

import { useTabsStore } from "../../store/workspace";

const Projects: React.FC = () => {
  const { addTab } = useTabsStore();
  const [loadDocuments] = useState(true);
  const documents = useDocuments(loadDocuments);

  if (documents.error) {
    return <>Error fetching documents</>;
  }
  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  return (
    <>
      {documents.data?.map((document) => (
        <button key={document} onClick={() => addTab(document)}>
          {document}
        </button>
      ))}
    </>
  );
};

export default Projects;
