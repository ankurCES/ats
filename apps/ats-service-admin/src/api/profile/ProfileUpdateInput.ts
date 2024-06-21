import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  contactEmail?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  resume?: InputJsonValue;
};
