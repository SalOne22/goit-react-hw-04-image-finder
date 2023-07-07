import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { fetchImages } from 'services/api';
import { Modal } from './Modal';

const PAGE_SIZE = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [modalData, setModalData] = useState(null);

  const handleSearch = value => {
    if (value === '') return;

    setQuery(value);
    setImages([]);
    setCanLoadMore(true);
    setPage(1);
  };

  const handleImageClick = id => {
    setModalData(images.find(image => image.id === id));
  };

  const handleModalClose = () => {
    setModalData(null);
  };

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);

      try {
        const images = await fetchImages({
          query,
          page,
          per_page: PAGE_SIZE,
        });

        if (images.length < PAGE_SIZE) {
          setCanLoadMore(false);
        }

        setImages(prev => [...prev, ...images]);
      } catch (err) {
        console.error(err);
        setCanLoadMore(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query) return;

    loadImages();
  }, [page, query]);

  return (
    <Container>
      <Searchbar onSubmit={handleSearch} />

      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}

      {images.length !== 0 && canLoadMore && (
        <Button onLoadMore={() => setPage(prev => prev + 1)} />
      )}

      {modalData && (
        <Modal
          onClose={handleModalClose}
          src={modalData.largeImageURL}
          alt={modalData.tags}
        />
      )}
    </Container>
  );
};
