import { create } from "zustand";
import { FileType, FileState } from "../../interfaces/workspace/file";

const useFileStore = create<FileState>((set) => ({
  file: {} as FileType,
  selectFile: (file) =>
    set(() => ({
      file: file,
    })),
}));

export default useFileStore;
