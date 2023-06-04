import { create } from "zustand";

interface FileStoreState {
  filepath: string;
  content: string | null;
  selectFile: (filepath: string) => void;
  setContent: (content: string) => void;
}

const useFileStore = create<FileStoreState>((set) => ({
  filepath: "",
  content: "",
  selectFile: (filepath) =>
    set(() => ({
      filepath: filepath,
    })),
  setContent: (content) =>
    set(() => ({
      content: content,
    })),
}));

export default useFileStore;
