import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchPhotos } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import s from "./App.module.css";
import { Toaster } from "react-hot-toast";
import { Photo, Result } from "../../types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string>("");

  useEffect(() => {
    const getphotos = async (): Promise<void> => {
      if (!query) {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const response: Result = await fetchPhotos(query, page, 10);
        setPhotos((prev) => [...prev, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error: unknown) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getphotos();
  }, [query, page]);

  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const openModal = (imageUrl: string): void => {
    setSelectedPhoto(imageUrl);
    setIsOpen(true);
  };

  const closeModal = (): void => {
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
