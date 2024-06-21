/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecruitmentStageWhereUniqueInput } from "./RecruitmentStageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RecruitmentStageUpdateInput } from "./RecruitmentStageUpdateInput";

@ArgsType()
class UpdateRecruitmentStageArgs {
  @ApiProperty({
    required: true,
    type: () => RecruitmentStageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentStageWhereUniqueInput)
  @Field(() => RecruitmentStageWhereUniqueInput, { nullable: false })
  where!: RecruitmentStageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RecruitmentStageUpdateInput,
  })
  @ValidateNested()
  @Type(() => RecruitmentStageUpdateInput)
  @Field(() => RecruitmentStageUpdateInput, { nullable: false })
  data!: RecruitmentStageUpdateInput;
}

export { UpdateRecruitmentStageArgs as UpdateRecruitmentStageArgs };
