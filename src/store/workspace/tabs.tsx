import { create } from "zustand";
import { TabsState } from "../../interfaces/workspace/tabs";

const useTabsStore = create<TabsState>((set) => ({
  tabs: [],
  addTab: (tab) => set((state) => ({ tabs: [...state.tabs, tab] })),
  removeTab: (tab) => set((state) => ({ tabs: state.tabs.filter((_tab) => _tab !== tab) })),
}));

export default useTabsStore;
