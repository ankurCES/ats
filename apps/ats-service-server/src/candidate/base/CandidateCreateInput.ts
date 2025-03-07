/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, IsInt } from "class-validator";
import { EnumCandidateSkillsNew } from "./EnumCandidateSkillsNew";

@InputType()
class CandidateCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skills?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCandidateSkillsNew,
    isArray: true,
  })
  @IsEnum(EnumCandidateSkillsNew, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumCandidateSkillsNew], {
    nullable: true,
  })
  skillsNew?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  workExperience?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  yearsOfExperience?: number | null;
}

export { CandidateCreateInput as CandidateCreateInput };
