import * as trpcNext from '@trpc/server/adapters/next';
import { maktabRouter } from '@alkhidmah/maktab/api';
import { createContext } from '@alkhidmah/maktab/shared/utils/trpc/server';

// export API handler
export default trpcNext.createNextApiHandler({
  router: maktabRouter,
  createContext,
});
