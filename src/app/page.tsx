import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed";
import ButtonClient from "./button";

export default async function Home() {
  const photos = await photosGet();
  return (
    <section className="container minContainer">
      <h1 className={"title"}>Dogs Next</h1>
      <Feed photos={photos} />

      <ButtonClient />
    </section>
  );
}
