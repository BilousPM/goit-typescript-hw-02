import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, imageClick }) => {
  return (
    <ul className={s.list}>
      {photos.map((photo) => (
        <li key={photo.id} className={s.item}>
          <ImageCard data={photo} onClick={imageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
