import { create } from "zustand";

interface IsHistoryStoreState {
  isHistory: boolean;
  setIsHistory: (isHistory: boolean) => void;
}

const useIsHistoryStore = create<IsHistoryStoreState>((set) => ({
  isHistory: false,
  setIsHistory: (isHistory: boolean) =>
    set(() => ({
      isHistory: isHistory,
    })),
}));

export default useIsHistoryStore;
