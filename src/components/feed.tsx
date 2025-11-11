import FeedPhotos from "./feed-photos";
import { Photo } from "@/actions/photos-get";

export default async function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <h1>Feed</h1>

      <FeedPhotos photos={photos} />
    </div>
  );
}
