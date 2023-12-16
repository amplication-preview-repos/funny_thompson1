import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BulletWhereInput = {
  children?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
