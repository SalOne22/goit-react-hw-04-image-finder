import { Btn } from './Button.styled';

export const Button = ({ onLoadMore }) => (
  <Btn type="button" onClick={onLoadMore}>
    Load more
  </Btn>
);
