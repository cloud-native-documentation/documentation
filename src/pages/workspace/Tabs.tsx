import React from "react";

import {
  useFileStore,
  useTabsStore,
  useVersionStore,
} from "../../store/workspace";

const Tabs: React.FC = () => {
  const { tabs, removeTab } = useTabsStore();
  const { selectFile } = useFileStore();

  return (
    <>
      {tabs.map((tab) => (
        <div key={tab}>
          <button onClick={() => selectFile(tab)}>{tab}</button>
          <button onClick={() => removeTab(tab)}>(x)</button>
        </div>
      ))}
    </>
  );
};

export default Tabs;
