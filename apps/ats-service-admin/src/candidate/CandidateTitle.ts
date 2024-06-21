import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "phoneNumber";

export const CandidateTitle = (record: TCandidate): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
