export default async function PageUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { user } = await params;
  return (
    <div>
      <h1>PageUserPage: {user}</h1>
    </div>
  );
}
