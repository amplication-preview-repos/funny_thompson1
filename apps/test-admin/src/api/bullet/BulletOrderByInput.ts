import { SortOrder } from "../../util/SortOrder";

export type BulletOrderByInput = {
  children?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
