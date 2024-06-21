import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecruitmentStageService } from "./recruitmentStage.service";
import { RecruitmentStageControllerBase } from "./base/recruitmentStage.controller.base";

@swagger.ApiTags("recruitmentStages")
@common.Controller("recruitmentStages")
export class RecruitmentStageController extends RecruitmentStageControllerBase {
  constructor(protected readonly service: RecruitmentStageService) {
    super(service);
  }
}
