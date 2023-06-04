import { create } from "zustand";

interface usePaths {
  path_f: string;
  path_s: string;
  selectFile: string;
  setPathF: (path: string) => void;
  setPathS: (path: string) => void;
  setSelectFile: (name: string) => void;
}

const usePath = create<usePaths>((set) => ({
  path_f: "/",
  path_s: "",
  selectFile: "",
  setPathF: (path) =>
    set(() => ({
      path_f: path,
    })),
  setPathS: (path) =>
    set(() => ({
      path_s: path,
    })),
  setSelectFile: (name) =>
    set(() => ({
      selectFile: name,
    })),
}));

export default usePath;
