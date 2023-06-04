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
