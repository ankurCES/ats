import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  skills?: SortOrder;
  skillsNew?: SortOrder;
  updatedAt?: SortOrder;
  workExperience?: SortOrder;
  yearsOfExperience?: SortOrder;
};
