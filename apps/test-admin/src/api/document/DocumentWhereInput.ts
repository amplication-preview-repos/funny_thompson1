import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DocumentWhereInput = {
  children?: StringNullableFilter;
  id?: StringFilter;
  shared?: BooleanNullableFilter;
};
