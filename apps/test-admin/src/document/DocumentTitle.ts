import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "children";

export const DocumentTitle = (record: TDocument): string => {
  return record.children?.toString() || String(record.id);
};
