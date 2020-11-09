import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ searchInput: '' })
  }

  render() {
    const { onSubmit } = this.props;
    const { searchInput } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={event => onSubmit(event, searchInput, this.formReset)}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="searchInput"
            value={searchInput}
            onChange={this.onChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
