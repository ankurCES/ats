import * as graphql from "@nestjs/graphql";
import { RecruitmentStageResolverBase } from "./base/recruitmentStage.resolver.base";
import { RecruitmentStage } from "./base/RecruitmentStage";
import { RecruitmentStageService } from "./recruitmentStage.service";

@graphql.Resolver(() => RecruitmentStage)
export class RecruitmentStageResolver extends RecruitmentStageResolverBase {
  constructor(protected readonly service: RecruitmentStageService) {
    super(service);
  }
}
