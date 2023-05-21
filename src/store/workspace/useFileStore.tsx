import { create } from "zustand";

interface FileStoreState {
  filepath: string;
  selectFile: (filepath: string) => void;
}

const useFileStore = create<FileStoreState>((set) => ({
  filepath: "",
  selectFile: (filepath) =>
    set(() => ({
      filepath: filepath,
    })),
}));

export default useFileStore;
