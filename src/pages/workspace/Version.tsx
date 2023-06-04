import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";

import { VscSave } from "react-icons/vsc";

import { useDocument, useCommitDocument, useVersion } from "../../api/document";

import { useFileStore } from "../../store/workspace";
import { Button } from "flowbite-react";

const Version: React.FC<{ fileID: string }> = ({ fileID }) => {
  const location = useLocation();

  const version = useVersion(fileID, true);
  const { trigger: triggerDocument, error: errorDocument } = useDocument();
  const {
    trigger: triggerCommitDocument,
    error: errorCommitDocument,
    isMutating: isMutatingCommitDocument,
  } = useCommitDocument();
  const { content } = useFileStore();

  const HandleDocument = (version: string) => {
    triggerDocument({ fileID, version });
  };

  const HandleCommitDocument = () => {
    triggerCommitDocument({ fileID: fileID, content: content || "" });
  };

  useEffect(() => {
    if (location.hash) {
      triggerDocument({ fileID, version: location.hash.slice(1) });
    }
  }, [location.hash, fileID, triggerDocument]);

  useEffect(() => {
    if (errorDocument || errorCommitDocument) {
      alert(errorDocument || errorCommitDocument);
    }
  }, [errorDocument, errorCommitDocument]);

  useEffect(() => {
    if (!isMutatingCommitDocument && !version.error) {
      version.mutate();
    }
  }, [version, isMutatingCommitDocument]);

  if (version.isLoading || version.error) {
    return <>error</>;
  }

  return (
    <div className="h-full w-full">
      <div className="flex justify-between h-10">
        <span>fileID: {fileID}</span>
        <button
          onClick={HandleCommitDocument}
          disabled={isMutatingCommitDocument}
        >
          <VscSave size={32} />
        </button>
      </div>
      {version.data?.actions?.map((element) => (
        <Button
          key={element.version}
          onClick={() => HandleDocument(element.version)}
        >
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="whitespace-nowrap">Ver {element.version}</div>
              <div className="whitespace-nowrap">({element.type} by {element.user})</div>
            </div>
            <div className="whitespace-nowrap">Time: {moment(element.time).fromNow()}</div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Version;
