import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};
