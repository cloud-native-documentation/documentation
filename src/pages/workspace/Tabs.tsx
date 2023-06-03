import React from "react";
import { Button } from "flowbite-react";

import { IoMdClose } from "react-icons/io";

import { useFileStore, useTabsStore } from "../../store/workspace";

const Tabs: React.FC = () => {
  const { tabs, removeTab } = useTabsStore();
  const { filepath, selectFile } = useFileStore();

  return (
    <div className="flex w-full divide-x-2 divide-violet-200 bg-violet-200">
      {tabs.map((tab) => (
        <Button.Group key={tab}>
          <Button
            className="rounded-none bg-violet-100 hover:bg-violet-50"
            onClick={() => selectFile(tab)}
          >
            <div className="text-gray-900">
              {tab}
            </div>
          </Button>
          <Button
            className="rounded-none bg-violet-100 hover:bg-violet-50"
            onClick={() => {
              removeTab(tab);
              if (filepath === tab) {
                selectFile("");
              }
            }}
          >
            <div className="text-gray-900">
              <IoMdClose className="h-5 w-5" />
            </div>
          </Button>
        </Button.Group>
      ))}
    </div>
  );
};

export default Tabs;
