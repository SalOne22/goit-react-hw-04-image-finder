import { Container } from 'App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGallery images={[]} />
    </Container>
  );
};
