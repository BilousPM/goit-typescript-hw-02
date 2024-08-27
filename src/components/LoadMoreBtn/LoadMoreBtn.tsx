import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      Load More...
    </button>
  );
};

export default LoadMoreBtn;
