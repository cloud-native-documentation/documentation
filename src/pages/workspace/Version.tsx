import { useEffect } from "react";
import { useDocument, useVersion } from "../../api/document";

const Version: React.FC<{ fileID: string }> = ({ fileID }) => {
  const version = useVersion(fileID, true);
  const { trigger: triggerDocument, error: errorDocument } = useDocument();

  const HandleDocument = (version: string) => {
    triggerDocument({fileID, version});
  }

  useEffect(() => {
    if (errorDocument) {
      alert(errorDocument.message);
    }
  }, [errorDocument]);

  if (version.isLoading || version.error) {
    return <></>;
  }

  return (
    <div className="h-full w-full">
      <div>fileID: {fileID}</div>
      {version.data?.actions?.map((element) => (
        <button key={element.version} onClick={() => HandleDocument(element.version)}>{element.version}</button>
      ))}
    </div>
  );
};

export default Version;
