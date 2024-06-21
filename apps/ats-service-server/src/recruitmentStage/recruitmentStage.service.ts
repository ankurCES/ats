import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecruitmentStageServiceBase } from "./base/recruitmentStage.service.base";

@Injectable()
export class RecruitmentStageService extends RecruitmentStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
