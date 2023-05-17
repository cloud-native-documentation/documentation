import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Files from "./Files";
import Actions from "./Actions";

const Workspace: React.FC = () => {
  return (
    <div className="absolute flex h-full w-full divide-x divide-gray-700 text-2xl">
      <Sidebar title="Home" isFile={true} />

      <Projects />

      <Files title="File one" />
      <Files title="File two" />

      <Actions />
    </div>
  );
};

export default Workspace;
