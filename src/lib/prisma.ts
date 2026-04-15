import { CONNECTIONSTRING } from "@/env";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: CONNECTIONSTRING! });
export const prisma = new PrismaClient({ adapter });
