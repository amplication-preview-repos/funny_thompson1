import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  children?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  shared?: SortOrder;
  updatedAt?: SortOrder;
};
