import { RecruitmentStage as TRecruitmentStage } from "../api/recruitmentStage/RecruitmentStage";

export const RECRUITMENTSTAGE_TITLE_FIELD = "stageName";

export const RecruitmentStageTitle = (record: TRecruitmentStage): string => {
  return record.stageName?.toString() || String(record.id);
};
