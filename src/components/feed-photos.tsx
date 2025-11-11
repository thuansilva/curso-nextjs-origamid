import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";

import style from "./feed.module.css";
export default async function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${style.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={style.photo} key={photo.id + i}>
          <Link href={`/photo/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span className={style.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
