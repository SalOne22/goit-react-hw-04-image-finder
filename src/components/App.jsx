import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { fetchImages } from 'services/api';
import { Modal } from './Modal';

const PAGE_SIZE = 12;

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    canLoadMore: true,
    modalData: null,
  };

  loadImages = async () => {
    this.setState({
      isLoading: true,
    });

    try {
      const images = await fetchImages({
        query: this.state.query,
        page: this.state.images.length / PAGE_SIZE + 1,
        per_page: PAGE_SIZE,
      });

      if (images.length < PAGE_SIZE) {
        this.setState({
          canLoadMore: false,
        });
      }

      this.setState(prev => ({
        images: [...prev.images, ...images],
      }));
    } catch (err) {
      console.error(err);
      this.setState({
        canLoadMore: false,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = value => {
    if (value === '') return;

    this.setState({ query: value });
  };

  handleImageClick = id => {
    this.setState(prevState => ({
      modalData: prevState.images.find(image => image.id === id),
    }));
  };

  handleModalClose = () => {
    this.setState({ modalData: null });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], canLoadMore: true }, this.loadImages);
    }
  }

  render() {
    const { images, canLoadMore, modalData, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}

        {images.length !== 0 && canLoadMore && (
          <Button onLoadMore={this.loadImages} />
        )}

        {modalData && (
          <Modal
            onClose={this.handleModalClose}
            src={modalData.largeImageURL}
            alt={modalData.tags}
          />
        )}
      </Container>
    );
  }
}
