import { prisma } from "@/lib/prisma";
import { AuthRepo } from "../interfaces/auth.repo";

export class AuthRepoImpl implements AuthRepo {
  async findByUserName(username: string) {
    try {
      return await prisma.user.findUnique({ where: { username } });
    } catch (error) {
      throw error;
    }
  }
}
