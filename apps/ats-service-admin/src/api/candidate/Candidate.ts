export type Candidate = {
  createdAt: Date;
  id: string;
  phoneNumber: string | null;
  skills: string | null;
  skillsNew?: Array<"Option1">;
  updatedAt: Date;
  workExperience: string | null;
  yearsOfExperience: number | null;
};
