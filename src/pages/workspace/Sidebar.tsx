import {
  VscArrowLeft,
  VscSave,
  VscSaveAs,
  VscHistory,
  VscFolderOpened,
} from "react-icons/vsc";

const Sidebar: React.FC<{ title: string; isFile: boolean }> = (props) => {
  const clickButton = (e: { currentTarget: { id: string } }) => {
    console.log(e.currentTarget.id, "click");
  };

  const MyButton: React.FC<{ id: string; icons: JSX.Element }> = (props) => {
    return (
      <button
        id={props.id}
        className="flex w-9/12 flex-row items-center justify-start space-x-2 rounded-2xl px-3 py-1 hover:bg-sky-700"
        onClick={clickButton}
      >
        {props.icons}
        <p>{props.id}</p>
      </button>
    );
  };

  const FileOptions: React.FC<{ isFile: boolean }> = (props) => {
    if (props.isFile)
      return (
        <div className="flex w-full flex-col items-center justify-center space-y-4 py-1 text-lg">
          <MyButton id="Save" icons={<VscSave className="scale-125" />} />
          <MyButton id="Save as" icons={<VscSaveAs className="scale-125" />} />
          <MyButton id="History" icons={<VscHistory className="scale-125" />} />
          <MyButton
            id="Open"
            icons={<VscFolderOpened className="scale-125" />}
          />
        </div>
      );
    return (
      <div className="flex w-full flex-col items-center justify-center space-y-4 py-1 text-lg">
        <MyButton id="Open" icons={<VscFolderOpened className="scale-125" />} />
      </div>
    );
  };

  return (
    <div className="w-2/12 bg-gray-200">
      <div className="flex w-full flex-row items-center space-x-2 py-3">
        <button id="gohome" onClick={clickButton}>
          <VscArrowLeft className="scale-110" />
        </button>
        <p>{props.title}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FileOptions isFile={props.isFile} />
      </div>
    </div>
  );
};

export default Sidebar;
