import { create } from "zustand";

interface usePaths {
  path_f: string;
  path_s: string;
  selectFile: string;
  selectFileName: string;

  setPathF: (path: string) => void;
  setPathS: (path: string) => void;
  setSelectFile: (id: string) => void;
  setSelectFileName: (name: string) => void;
}

const usePath = create<usePaths>((set) => ({
  path_f: "/",
  path_s: "",
  selectFile: "",
  selectFileName: "",
  setPathF: (path) =>
    set(() => ({
      path_f: path,
    })),
  setPathS: (path) =>
    set(() => ({
      path_s: path,
    })),
  setSelectFile: (id) =>
    set(() => ({
      selectFile: id,
    })),

  setSelectFileName: (name) =>
    set(() => ({
      selectFileName: name,
    })),
}));

export default usePath;
