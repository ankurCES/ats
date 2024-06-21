import { JsonValue } from "type-fest";

export type Profile = {
  contactEmail: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  resume: JsonValue;
  updatedAt: Date;
};
