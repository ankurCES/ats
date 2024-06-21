import { RecruitmentStageWhereInput } from "./RecruitmentStageWhereInput";
import { RecruitmentStageOrderByInput } from "./RecruitmentStageOrderByInput";

export type RecruitmentStageFindManyArgs = {
  where?: RecruitmentStageWhereInput;
  orderBy?: Array<RecruitmentStageOrderByInput>;
  skip?: number;
  take?: number;
};
