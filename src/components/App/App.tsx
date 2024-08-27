import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchPhotots } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import s from "./App.module.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    const getphotos = async () => {
      if (!query) {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchPhotots(query, page, 10);
        setPhotos((prev) => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getphotos();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const openModal = (imageUrl) => {
    setSelectedPhoto(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto("");
  };

  return (
    <div className={s.appWrapper}>
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} imageClick={openModal} />
      )}

      {totalPages > page && !isLoading && (
        <LoadMoreBtn
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        />
      )}
      <Toaster position="top-right" reverseOrder={true} />
      <ImageModal
        isOpen={isOpen}
        handleCloseModal={closeModal}
        url={selectedPhoto}
      />
    </div>
  );
};

export default App;
