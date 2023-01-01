import { trpc } from '../utils';

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
