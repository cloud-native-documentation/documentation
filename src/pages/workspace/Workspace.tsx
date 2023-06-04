import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { useDocument } from "../../api/document";

import Version from "./Version";
import TextArea from "./TextArea";

const Workspace: React.FC = () => {
  const location = useLocation();
  const { fileID } = useParams();
  const { trigger: triggerDocument, error: errorDocument } = useDocument();

  useEffect(() => {
    if (errorDocument) {
      return;
    }
    if (location.hash) {
      return;
    }
    triggerDocument({ fileID: fileID || "" });
  }, [triggerDocument, errorDocument, fileID]);

  if (errorDocument) {
    return <div>errorDocument</div>;
  }

  return (
    <>
      <div className="absolute my-0 flex w-full">
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
