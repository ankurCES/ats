import { SortOrder } from "../../util/SortOrder";

export type JobPositionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requirements?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
