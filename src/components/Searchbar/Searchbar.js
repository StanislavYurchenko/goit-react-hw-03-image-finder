import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css'

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

  onSubmit = event => {
    event.preventDefault();
    const { searchFormSubmit } = this.props;
    const { searchInput } = this.state;
    searchFormSubmit(searchInput);
    this.formReset();
  };

  render() {

    const { searchInput } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
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

Searchbar.propTypes = {
  searchFormSubmit: PropTypes.func.isRequired
}

export default Searchbar;
