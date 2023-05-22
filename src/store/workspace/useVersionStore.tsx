import { create } from "zustand";

interface VersionStoreState {
  version: string;
  setVersion: (version: string) => void;
}

const useVersionStore = create<VersionStoreState>((set) => ({
  version: "",
  setVersion: (version: string) =>
    set(() => ({
      version: version,
    })),
}));

export default useVersionStore;
