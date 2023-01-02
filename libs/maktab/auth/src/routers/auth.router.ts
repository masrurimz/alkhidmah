import { procedure, router } from '@alkhidmah/maktab/shared/utils';
import { z } from 'zod';

export const authRouter = router({
  register: procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: input.password,
        },
      });

      return user;
    }),
});
