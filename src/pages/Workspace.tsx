import { VscArrowLeft, VscSave, VscSaveAs, VscHistory } from "react-icons/vsc";

// open, save, save as, history button
const FunctionsSection: React.FC<{ title: string; isFile: boolean }> = (
  props
) => {
  const clickArrow = () => {
    console.log("click");
  };

  const FileOptions: React.FC<{ isFile: boolean }> = (props) => {
    if (props.isFile)
      return (
        <div className="w-full text-lg py-5 space-y-2 py-3">
          <button className="w-full flex flex-row space-x-2 items-center pl-5">
            <VscSave className="scale-125" onClick={clickArrow} />
            <p>Save</p>
          </button>
          <button className="w-full flex flex-row space-x-2 items-center pl-5">
            <VscSaveAs className="scale-125" onClick={clickArrow} />
            <p>Save as</p>
          </button>
          <button className="w-full flex flex-row space-x-2 items-center pl-5">
            <VscHistory className="scale-125" onClick={clickArrow} />
            <p>History</p>
          </button>
        </div>
      );
    return <></>;
  };

  return (
    <div className="bg-green-400 w-3/12">
      <div className="w-full py-3 items-center flex flex-col">
        <div
          className="flex flex-row space-x-2 w-9/12 items-center pb-1 \
          border-transparent border-2 border-b-gray-400"
        >
          <VscArrowLeft className="scale-110" onClick={clickArrow} />
          <p>{props.title}</p>
        </div>
        <FileOptions isFile={props.isFile} />
      </div>
    </div>
  );
};

const ProjectSection: React.FC<{}> = () => {
  return (
    <div className="bg-red-400 w-3/12 py-3  pl-3">
      <p>Project</p>
    </div>
  );
};

// File structure Brower
const FilesSection: React.FC<{ title: string }> = (props) => {
  return (
    <div className="bg-blue-400 w-3/12 py-3 pl-3">
      <p>{props.title}</p>
    </div>
  );
};

const PermissionSection: React.FC<{}> = (props) => {
  return (
    <div className="bg-orange-400 flex-auto py-3 pl-3">
      <p>Permission Section</p>
    </div>
  );
};

// Main
const Workspace: React.FC<{}> = (props) => {
  return (
    <div className="absolute h-full w-full flex divide-x divide-gray-700 text-2xl">
      <FunctionsSection title="Home" isFile={true} />

      <ProjectSection />

      <FilesSection title="File one" />
      <FilesSection title="File two" />

      <PermissionSection />
    </div>
  );
};

export default Workspace;
