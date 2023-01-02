import { procedure, router } from '@alkhidmah/maktab/shared/utils/trpc/server';
import { z } from 'zod';

export const authRouter = router({
  register: procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: input.password,
          name: input.name,
        },
      });

      return user;
    }),
});
