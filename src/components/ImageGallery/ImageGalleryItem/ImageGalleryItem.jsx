import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, onClick }) => (
  <Item onClick={onClick}>
    <Image src={src} alt={alt} />
  </Item>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
