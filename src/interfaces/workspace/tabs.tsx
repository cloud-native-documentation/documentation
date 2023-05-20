export interface TabsState {
  tabs: string[];
  addTab: (tab: string) => void;
  removeTab: (tab: string) => void;
}
