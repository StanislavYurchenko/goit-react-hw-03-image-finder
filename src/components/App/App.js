import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar'


const apiKey = '18376090-d7378f6abd5315284a04e80ad';



class App extends Component {
  state = {
    userQuery: "",
  }

  onSubmit = (event, searchInput, formReset) => {
    event.preventDefault();
    this.setState({ userQuery: searchInput });
    formReset();
  }

  render() {
    return <Searchbar onSubmit={this.onSubmit} />
  }
}

export default App;