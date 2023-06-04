import React from "react";

import { useFileStore } from "../../store/workspace";

const TextArea: React.FC = () => {
  const { content, setContent } = useFileStore();

  const HandleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <textarea
      value={content || ""}
      onChange={HandleContentChange}
      className="block h-full w-full rounded-lg border-none p-2.5 text-sm text-gray-900"
    />
  );
};

export default TextArea;
