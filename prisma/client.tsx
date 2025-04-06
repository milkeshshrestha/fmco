// prisma/client.ts
//this is not function but global variable
//there is no return statement

import { PrismaClient } from "@prisma/client";

// globalThis
// globalThis is a special object in JavaScript that gives access to the global scope across any environment (Node.js, browser, etc.).
// ✅ as unknown as { prisma: PrismaClient | undefined }
// TypeScript doesn't know that globalThis has a prisma property — it complains.
// So, we forcefully type globalThis to say, “Trust me, it has a property called prisma that’s either a PrismaClient or undefined.”
// We first cast globalThis to unknown (a neutral type), and then cast it again to our desired shape:
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
export const prisma =
  globalForPrisma.prisma ??
  (() => {
    console.log("Creating new Prisma client instance...");
    return new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    // .$extends({
    //   query: {
    //     $allModels: {
    //       $allOperations: async ({ model, operation, args, query }) => {
    //         const before = Date.now();
    //         const result = await query(args);
    //         const after = Date.now();

    //         console.log(`Query: ${model}.${operation}`);
    //         console.log(`Execution time: ${after - before}ms`);
    //         console.log(`Params: ${JSON.stringify(args)}`);

    //         return result;
    //       },
    //     },
    //   },
    // });
  })();

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}

export default prisma;
