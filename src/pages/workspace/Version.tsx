import { useEffect } from "react";
import { VscSave } from "react-icons/vsc";

import { useDocument, useCommitDocument, useVersion } from "../../api/document";

import { useFileStore } from "../../store/workspace";
import { Button } from "flowbite-react";

const Version: React.FC<{ fileID: string }> = ({ fileID }) => {
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
          <span>Version: {element.version}</span>
          <span>Type: {element.type}</span>
          <span>User: {element.user}</span>
          <span>Time: {element.time}</span>
        </Button>
      ))}
    </div>
  );
};

export default Version;
