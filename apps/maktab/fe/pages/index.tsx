import { trpc } from '@alkhidmah/maktab/shared/utils/trpc/client';

export default function IndexPage() {
  const hello = trpc.hello.useQuery({
    text: 'Boram',
  });

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
