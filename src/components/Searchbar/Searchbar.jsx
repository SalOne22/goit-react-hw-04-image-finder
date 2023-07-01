import {
  Header,
  SearchForm,
  SubmitBtn,
  SubmitBtnLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => (
  <Header>
    <SearchForm onSubmit={onSubmit}>
      <SubmitBtn type="submit">
        <SubmitBtnLabel>Search</SubmitBtnLabel>
      </SubmitBtn>

      <Input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </Header>
);
