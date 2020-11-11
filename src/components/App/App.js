import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PixabayApiRequest from '../../utils/PixabayApi/PixabayApI';

class App extends Component {
  state = {
    userQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    isModalShow: false,
    image: {},
    fetchError: null,
  };

  componentDidMount() {
    const { userQuery } = this.state;
    this.request(userQuery);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userQuery, page } = this.state;

    if (prevState.userQuery !== userQuery) {
      this.request();
    }
    if (page !== prevState.page) {
      this.scrollToButton();
    }
  }

  searchFormSubmit = searchInput => {
    this.setState({ userQuery: searchInput, page: 1, images: [] });
  };

  scrollToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  request = () => {
    const { userQuery, page } = this.state;

    this.setState({ isLoading: true });

    PixabayApiRequest(userQuery, page)
      .then(({ data }) =>
        this.setState(({ images, page }) => {
          return { images: [...images, ...data.hits], page: page + 1 };
        }),
      )
      .then(this.setState({ fetchError: '' }))
      .catch(error => this.setState({ fetchError: error.messages }))
      .finally(this.setState({ isLoading: false }));
  };

  toggleModal = event => {
    const { name, id } = event.target.dataset;
    const { images } = this.state;

    const image = images.find(image => Number.parseInt(id) === image.id);

    this.setState(({ isModalShow }) => {
      if (name === 'image') return { isModalShow: true, image: image };
      if (name === 'overlay') return { isModalShow: false, image: {} };
    });
  };

  render() {
    const { images, isLoading, isModalShow, image } = this.state;
    return (
      <div className="App">
        <Searchbar searchFormSubmit={this.searchFormSubmit} />

        {images.length > 0 && (
          <ImageGallery>
            {images.map(({ id, webformatURL, tags }) =>
              ImageGalleryItem({ id, src: webformatURL, alt: tags, onClick: this.toggleModal }),
            )}
          </ImageGallery>
        )}

        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} className="Loader" />}
        {images.length > 0 && !isLoading && <Button onClick={this.request} />}

        {isModalShow && <Modal image={image} onClick={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
