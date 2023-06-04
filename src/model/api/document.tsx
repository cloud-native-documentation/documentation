export interface OldDocumentType {
  name: string;
  isFile: boolean;
  id: string;
}

export interface OldDocumentsRespType {
  status: string;
  documentlist: OldDocumentType[];
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