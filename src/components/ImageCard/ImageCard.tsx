import s from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  console.log(data);
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
