import type { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure, publicProcedure } from "~/trpc/trpc";

export const exampleRouter = {
  hello: publicProcedure.query(() => {
    return "hello world";
  }),
  user: protectedProcedure.query(async ({ input, ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        id: ctx.user?.id,
      },
    });

    return user;
  }),
} satisfies TRPCRouterRecord;