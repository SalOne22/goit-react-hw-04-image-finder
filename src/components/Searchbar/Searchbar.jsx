import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SubmitBtn,
  SubmitBtnLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.query.value.trim();

    onSubmit(value);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SubmitBtn type="submit">
          <SubmitBtnLabel>Search</SubmitBtnLabel>
        </SubmitBtn>

        <Input
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
