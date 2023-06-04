import { create } from "zustand";

type ProjectFileType = {
  name: string;
  isFile: boolean;
  children?: { name: string }[];
};

type ProjectFilesType = ProjectFileType[];

interface ProjectStoreState {
  projectFiles: ProjectFilesType;
  updateProjectFiles: (projectFiles: string[]) => void;
  createItem: (name: string, directory: string, isFile: boolean) => void;
  deleteItem: (name: string, directory: string) => void;
}

const useProjectStore = create<ProjectStoreState>((set) => ({
  projectFiles: [],
  updateProjectFiles: (projectFiles) => {
    set(() => ({
      projectFiles: projectFiles.map((element) => {
        if (element[element.length - 1] === "/") {
          const folder: ProjectFileType = {
            name: element,
            isFile: false,
            children: [],
          };
          return folder;
        }

        const file: ProjectFileType = {
          name: element,
          isFile: true,
        };
        return file;
      }),
    }));
  },
  createItem: (name, directory, isFile) =>
    set((state) => {
      const newProjectFiles = state.projectFiles;
      const newItem = {
        name: name,
        isFile: isFile,
      };

      if (directory === "/") {
        newProjectFiles.push(newItem);
      } else {
        const index = newProjectFiles.findIndex(
          (element) => element.name === directory && element.isFile === false
        );
        newProjectFiles[index].children?.push(newItem);
      }
      return {
        projectFiles: newProjectFiles,
      };
    }),
  deleteItem: (name, directory) =>
    set((state) => {
      let newProjectFiles = state.projectFiles;

      if (directory === "/") {
        newProjectFiles = newProjectFiles.filter(
          (element) => element.name !== name
        );
      } else {
        const index = newProjectFiles.findIndex(
          (element) => element.name === directory
        );
        newProjectFiles[index].children = newProjectFiles[index].children?.filter(
          (element) => element.name !== name
        );
      }
      return {
        projectFiles: newProjectFiles,
      };
    }),
}));

export default useProjectStore;
