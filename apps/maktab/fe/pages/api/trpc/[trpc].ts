import * as trpcNext from '@trpc/server/adapters/next';
import { maktabRouter } from '@alkhidmah/maktab/api';

// export API handler
export default trpcNext.createNextApiHandler({
  router: maktabRouter,
  createContext: () => ({}),
});
