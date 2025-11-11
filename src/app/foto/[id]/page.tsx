export default async function FotoIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h1>FotoIdPage: {id}</h1>
    </div>
  );
}
