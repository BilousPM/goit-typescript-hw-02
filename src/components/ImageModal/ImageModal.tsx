import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { FC } from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  url: string;
  isOpen: boolean;
  handleCloseModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ url, isOpen, handleCloseModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={s.modal}
    >
      <div>
        <img src={url} />
      </div>
    </Modal>
  );
};

export default ImageModal;
