import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGallery images={[]} />
      <Loader />
      <Button />
    </Container>
  );
};
