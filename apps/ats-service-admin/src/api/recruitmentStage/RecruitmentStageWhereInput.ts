import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecruitmentStageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  stageName?: StringNullableFilter;
};
