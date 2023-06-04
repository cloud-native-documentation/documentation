import axios from "axios";
import apiConfig from "../apiConfig";
import useSWRMutation from "swr/mutation";

import { CommitDocumentRespType } from "../../model/api/document";

type CommitDocumentData = {
  fileID: string;
  content: string;
};

const commitDocument = (
  _: string,
  {
    arg: { fileID, content },
  }: {
    arg: CommitDocumentData;
  }
) => {
  const url = apiConfig.url.document.commit();
  const data = { id: fileID, content: content };
  console.log(url);
  console.log(data);
  return axios
    .post(url, data)
    .then((res) => res.data as CommitDocumentRespType);
};

const useCommitDocument = () =>
  useSWRMutation(apiConfig.url.document.commit(), commitDocument);

export default useCommitDocument;
