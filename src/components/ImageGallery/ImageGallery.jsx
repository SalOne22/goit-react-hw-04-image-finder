import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <Gallery>
    {images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        onClick={() => onImageClick(id)}
        key={id}
        src={webformatURL}
        alt={tags}
      />
    ))}
  </Gallery>
);
