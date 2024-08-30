import { FC } from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      Load More...
    </button>
  );
};

export default LoadMoreBtn;
