import React from "react";

import { useDocuments, useVersions } from "../../api/document";

import {
  useIsHistoryStore,
  useTabsStore,
  useVersionStore,
} from "../../store/workspace";

const Projects: React.FC = () => {
  const { isHistory } = useIsHistoryStore();

  const documents = useDocuments(!isHistory);
  const versions = useVersions(isHistory);

  const { addTab } = useTabsStore();
  const { setVersion } = useVersionStore();

  if (documents.error) {
    return <>Error fetching documents</>;
  }
  if (documents.isLoading) {
    return <>Fetching documents...</>;
  }

  if (isHistory) {
    return (
      <>
        {versions.data?.map((version) => (
          <button key={version} onClick={() => setVersion(version)}>
            {version}
          </button>
        ))}
      </>
    );
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
