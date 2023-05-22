import { create } from "zustand";

interface TabsState {
  tabs: string[];
  addTab: (tab: string) => void;
  removeTab: (tab: string) => void;
}

const extendArray = (tabs: string[], tab: string) =>
  tabs.includes(tab) ? tabs : [...tabs, tab];

const useTabsStore = create<TabsState>((set) => ({
  tabs: [],
  addTab: (tab) => set((state) => ({ tabs: extendArray(state.tabs, tab) })),
  removeTab: (tab) =>
    set((state) => ({ tabs: state.tabs.filter((_tab) => _tab !== tab) })),
}));

export default useTabsStore;
