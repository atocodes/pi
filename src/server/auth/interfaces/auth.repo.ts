// import { User } from "@prisma/client";

export interface AuthRepo {
  findByUserName(username: string): Promise<any | null>;
}
