import { create } from "zustand";

interface selectProject {
  selectedProject: string;
  setSelectedProject: (name: string) => void;
  clearSelectedProject: () => void;
}

const useSelectProjectStore = create<selectProject>((set) => ({
  selectedProject: "",
  setSelectedProject: (name) =>
    set(() => ({
      selectedProject: name,
    })),
  clearSelectedProject: () =>
    set(() => ({
      selectedProject: "",
    })),
}));

export default useSelectProjectStore;
