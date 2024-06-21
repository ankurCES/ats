import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobPositionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  requirements?: StringNullableFilter;
  title?: StringNullableFilter;
};
