import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ImageGallery images={[]} />
      <Button />
    </Container>
  );
};
