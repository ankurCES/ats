import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CandidateWhereInput = {
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  skills?: StringNullableFilter;
  workExperience?: StringNullableFilter;
  yearsOfExperience?: IntNullableFilter;
};
