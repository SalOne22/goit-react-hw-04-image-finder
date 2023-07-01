import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => (
  <Gallery>
    {images.map(({ id, src, alt }) => (
      <ImageGalleryItem key={id} src={src} alt={alt} />
    ))}
  </Gallery>
);
