import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDocument } from "../../api/document";

import Version from "./Version";
import TextArea from "./TextArea";

const Workspace: React.FC = () => {
  const { fileID } = useParams();
  const { trigger: triggerDocument, error: errorDocument } = useDocument();

  useEffect(() => {
    triggerDocument({fileID: fileID || ""});
  }, [triggerDocument, fileID]);

  useEffect(() => {
    if (errorDocument) {
      alert(errorDocument.message);
    }
  }, [errorDocument]);

  return (
    <>
      <div className="absolute flex w-full">
        <div className="w-38 flex flex-col items-center bg-white text-xl">
          <Version fileID={fileID || ""} />
        </div>
        <div className="items-centertext-xl flex w-full flex-col bg-violet-100">
          <div className="h-full w-full">
            <TextArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace;
