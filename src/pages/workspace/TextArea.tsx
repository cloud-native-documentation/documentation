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
    return <></>;
  }

  if (document.data == null) {
    return <></>;
  }

  return (
    <textarea className="block p-2.5 h-full w-full text-sm text-gray-900 rounded-lg border-none">
      {document.data?.content}
    </textarea>
  );
};

export default TextArea;
