import { authRouter } from '@alkhidmah/maktab/auth/backend';
import { procedure, router } from '@alkhidmah/maktab/shared/utils/trpc/server';
import { z } from 'zod';

export const maktabRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  auth: authRouter,
});
// export type definition of API
export type MaktabRouter = typeof maktabRouter;
