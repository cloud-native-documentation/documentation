import React, { useState } from "react";

import { useDocument } from "../../api/document";

import { useFileStore } from "../../store/workspace";

const TextArea: React.FC = () => {
  const { filepath } = useFileStore();
  const [loadDocument] = useState(true);
  const document = useDocument(loadDocument, filepath);

  if (document.error) {
    return <>Error fetching documents</>;
  }

  if (document.isLoading) {
    return <>Fetching documents...</>;
  }

  if (document.data == null) {
    return <>Not Selected</>;
  }

  return (
    <div className="h-full w-full bg-violet-100">
      TextArea: {document.data?.content}
    </div>
  );
};

export default TextArea;
