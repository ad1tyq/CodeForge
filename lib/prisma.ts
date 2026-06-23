import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

// Add connection error handling
prisma.$connect().catch((error) => {
  console.error("Prisma connection error:", error);
  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;