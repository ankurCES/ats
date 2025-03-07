/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Profile as PrismaProfile } from "@prisma/client";

export class ProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProfileCountArgs, "select">): Promise<number> {
    return this.prisma.profile.count(args);
  }

  async profiles(args: Prisma.ProfileFindManyArgs): Promise<PrismaProfile[]> {
    return this.prisma.profile.findMany(args);
  }
  async profile(
    args: Prisma.ProfileFindUniqueArgs
  ): Promise<PrismaProfile | null> {
    return this.prisma.profile.findUnique(args);
  }
  async createProfile(args: Prisma.ProfileCreateArgs): Promise<PrismaProfile> {
    return this.prisma.profile.create(args);
  }
  async updateProfile(args: Prisma.ProfileUpdateArgs): Promise<PrismaProfile> {
    return this.prisma.profile.update(args);
  }
  async deleteProfile(args: Prisma.ProfileDeleteArgs): Promise<PrismaProfile> {
    return this.prisma.profile.delete(args);
  }
}
