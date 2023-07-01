import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, onClick }) => (
  <Item onClick={onClick}>
    <Image src={src} alt={alt} />
  </Item>
);
