import {baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "../init";
import prisma from "@/lib/db";
import {inngest} from "@/inngest/client";
import {TRPCError} from "@trpc/server";


export const appRouter = createTRPCRouter({
  testAi:baseProcedure.mutation(async ()=>{
    
   await inngest.send({
   name:"execute/ai"});

return {success:true,message:"Job Queued"}

  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async ()=>{
   await inngest.send({
    name:"test/hello.world",
    data:{
        email:"swarnavqwe@gmail.com",
    },
   })
   return {success:true,message:"Job Queued"}
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
