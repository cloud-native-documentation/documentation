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

export interface CommitDocumentRespType {
  status: string;
}

interface HistoryItemType {
  version: string;
  username: string;
  type: string;
  modifyDate: string;
}

export interface HistoryRespType {
  status: string;
  actions: HistoryItemType[];
}

export interface ActionType {
  filename: string;
  type: string;
  user: string;
  time: string;
  version: number;
  isFile: boolean;
}