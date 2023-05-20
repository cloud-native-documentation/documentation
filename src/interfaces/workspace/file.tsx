export interface FileType {
  filename: string;
  content: string;
}

export interface FileState {
  file: FileType;
  selectFile: (file: FileType) => void;
}
