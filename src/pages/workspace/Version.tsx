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

  if (version.isLoading || version.error) {
    return <></>;
  }

  return (
    <div className="h-full w-full">
      <div>fileID: {fileID}</div>
      <button
        onClick={HandleCommitDocument}
        disabled={isMutatingCommitDocument}
      >
        <VscSave size={32} />
      </button>
      {version.data?.actions?.map((element) => (
        <Button
          key={element.version}
          onClick={() => HandleDocument(element.version)}
        >
          <span>Version: {element.version}</span>
          <span>Type: {element.type}</span>
          <span>Username: {element.username}</span>
          <span>ModifyDate: {element.modifyDate}</span>
        </Button>
      ))}
    </div>
  );
};

export default Version;
