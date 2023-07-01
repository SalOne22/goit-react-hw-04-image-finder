import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import axios from 'axios';

const PAGE_SIZE = 12;
const API_KEY = '36557566-6ba75e1a2acc62b457c544e60';
const BASE_URL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
  };

  handleSearch = value => {
    if (value === '') return;

    this.setState({ query: value });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], isLoading: true });

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: this.state.query,
            page: this.state.images.length / PAGE_SIZE + 1,
            per_page: PAGE_SIZE,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
          },
        });

        this.setState(prev => ({
          images: [...prev.images, response.data],
        }));
      } catch (err) {
        console.error(err);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={this.state.images} />
        )}

        {this.state.images.length !== 0 && <Button />}
      </Container>
    );
  }
}
