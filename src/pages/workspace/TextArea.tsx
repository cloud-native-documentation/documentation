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

  return <>TextArea: {document.data?.content}</>;
};

export default TextArea;
