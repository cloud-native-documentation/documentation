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