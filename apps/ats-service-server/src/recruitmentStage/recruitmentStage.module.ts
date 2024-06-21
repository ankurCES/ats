import { Module } from "@nestjs/common";
import { RecruitmentStageModuleBase } from "./base/recruitmentStage.module.base";
import { RecruitmentStageService } from "./recruitmentStage.service";
import { RecruitmentStageController } from "./recruitmentStage.controller";
import { RecruitmentStageResolver } from "./recruitmentStage.resolver";

@Module({
  imports: [RecruitmentStageModuleBase],
  controllers: [RecruitmentStageController],
  providers: [RecruitmentStageService, RecruitmentStageResolver],
  exports: [RecruitmentStageService],
})
export class RecruitmentStageModule {}
