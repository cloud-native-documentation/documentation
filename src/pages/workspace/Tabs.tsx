import React from "react";
import { Button } from "flowbite-react";

import { IoMdClose } from "react-icons/io";

import { useFileStore, useTabsStore } from "../../store/workspace";

const Tabs: React.FC = () => {
  const { tabs, removeTab } = useTabsStore();
  const { selectFile } = useFileStore();

  return (
    <div className="flex w-full divide-x-2 divide-violet-200 bg-violet-200">
      {tabs.map((tab) => (
        <Button.Group key={tab}>
          <Button
            className="rounded-none bg-violet-100 text-black hover:bg-violet-50"
            onClick={() => selectFile(tab)}
          >
            {tab}
          </Button>
          <Button
            className="rounded-none bg-violet-100 text-black hover:bg-violet-50"
            onClick={() => removeTab(tab)}
          >
            <IoMdClose className="h-5 w-5" />
          </Button>
        </Button.Group>
      ))}
    </div>
  );
};

export default Tabs;
