import { prisma } from "@/lib/prisma";

export async function findByUserName(username: string) {
  try {
    return await prisma.user.findUnique({ where: { username } });
  } catch (error) {
    throw error;
  }
}
