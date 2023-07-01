import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => (
  <Item>
    <Image src={src} alt={alt} />
  </Item>
);
