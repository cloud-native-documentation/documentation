import React from "react";

import { useHistoryActions } from "../../api/document";

import {
  useFileStore,
  useIsHistoryStore,
  useTabsStore,
  useVersionStore,
} from "../../store/workspace";

const Tabs: React.FC = () => {
  const { tabs, removeTab } = useTabsStore();
  const { selectFile } = useFileStore();
  const { isHistory } = useIsHistoryStore();
  const { version } = useVersionStore();
  const historyActions = useHistoryActions(isHistory, version);

  if (isHistory) {
    return (
      <>
        {historyActions.data?.map((historyAction) => (
          <div key={historyAction.filepath}>
            <button onClick={() => selectFile(historyAction.filepath)}>
              {historyAction.filepath}
            </button>
          </div>
        ))}
      </>
    );
  }

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
