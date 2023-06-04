import { create } from "zustand";

interface selectProject {
  selectedProject: string;
  setSelectedProject: (name: string) => void;
}

const useSelectProjectStore = create<selectProject>((set) => ({
  selectedProject: "",
  setSelectedProject: (name) =>
    set(() => ({
      selectedProject: name,
    })),
}));

export default useSelectProjectStore;
