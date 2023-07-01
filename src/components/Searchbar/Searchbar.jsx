import { Component } from 'react';
import {
  Header,
  SearchForm,
  SubmitBtn,
  SubmitBtnLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.query.value.trim();

    this.props.onSubmit(value);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
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
  }
}
