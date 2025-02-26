import { PrismaClient } from "@prisma/client";

//everytime nextjs reloads, the prisma client is reused instead of creating a new one every time
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
