import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  contactEmail?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  resume?: InputJsonValue;
};
