import { BulletWhereInput } from "./BulletWhereInput";
import { BulletOrderByInput } from "./BulletOrderByInput";

export type BulletFindManyArgs = {
  where?: BulletWhereInput;
  orderBy?: Array<BulletOrderByInput>;
  skip?: number;
  take?: number;
};
