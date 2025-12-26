import {
  createTRPCRouter,
 
} from "../init";
import {workflowsRouter} from "@/features/workflows/server/routers";
import prisma from "@/lib/db";
import {inngest} from "@/inngest/client";
import {TRPCError} from "@trpc/server";


export const appRouter = createTRPCRouter({
  workflows:workflowsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
