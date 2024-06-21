import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  resume?: SortOrder;
  updatedAt?: SortOrder;
};
