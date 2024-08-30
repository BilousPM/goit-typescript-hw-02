import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { FC } from "react";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo[];
  imageClick: (data: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, imageClick }) => {
  return (
    <ul className={s.list}>
      {photos.map((photo: Photo) => (
        <li key={photo.id} className={s.item}>
          <ImageCard data={photo} onClick={imageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
