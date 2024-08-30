import { FC } from "react";
import { Photo } from "../../types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  data: Photo;
  onClick: (data: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ data, onClick }) => {
  return (
    <>
      <div>
        <img
          className={s.image}
          src={data.urls.small}
          alt={data.alt_description}
          width={350}
          height={300}
          onClick={() => onClick(data.urls.regular)}
          style={{ cursor: "pointer" }}
        />
        <p className={s.likes}>{`❤️ ${data.likes}`}</p>
        <a href={data.user.links.html} className={s.link} target="blank">
          {data.user.name}
        </a>
      </div>
    </>
  );
};
export default ImageCard;
