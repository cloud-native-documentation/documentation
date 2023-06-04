import { Sidebar as FbSidebar } from "flowbite-react";
import React from "react";
import { HiFolderOpen, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import usePath from "../../store/explorer/usePath";
const Sidebar: React.FC<{ title: string; isFile: boolean }> = () => {
  const SideItem: React.FC<{ title: string; icon: JSX.Element, href: string }> = (props) => {
    return (
      <FbSidebar.Item
        href={props.href}
        id={props.title}
        icon={props.icon}
      >
        {props.title}
      </FbSidebar.Item>
    );
  };
  const { selectFile } = usePath();
  return (
    <div className="w-38 flex flex-col items-center">
      <div className="h-full w-full">
        <FbSidebar aria-label="Sidebar" className="w-full">
          <FbSidebar.Items>
            <FbSidebar.ItemGroup>
              <SideItem href="/" title="Home" icon={HiHome} />
            </FbSidebar.ItemGroup>
            {selectFile !== "" && (
              <FbSidebar.ItemGroup>
                <Link to={`workspace/${selectFile}`}>
                  <SideItem href="#" title="Open" icon={HiFolderOpen} />
                </Link>
              </FbSidebar.ItemGroup>
            )}
            <FbSidebar.ItemGroup>
              {/* <SideItem title="Save" icon={VscSave} />
              <SideItem title="Save As" icon={VscSaveAs} />
              <SideItem title="History" icon={VscHistory} /> */}
            </FbSidebar.ItemGroup>
          </FbSidebar.Items>
        </FbSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
