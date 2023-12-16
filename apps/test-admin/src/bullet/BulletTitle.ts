import { Bullet as TBullet } from "../api/bullet/Bullet";

export const BULLET_TITLE_FIELD = "children";

export const BulletTitle = (record: TBullet): string => {
  return record.children?.toString() || String(record.id);
};
