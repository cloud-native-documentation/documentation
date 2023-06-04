export interface OldDocumentsRespType {
  status: string;
  documentlist: string[];
}

export interface DocumentRespType {
  status: string;
  content: string;
}

export interface CreateDocumentRespType {
  status: string;
}

export interface DeleteDocumentRespType {
  status: string;
}

export interface ActionType {
  filename: string;
  type: string;
  user: string;
  time: string;
  version: number;
  isFile: boolean;
}