import React, { Component } from 'react';
import './App.css'
import CustomLoader from '../CustomLoader/CustomLoader';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import pixabayApiRequest from '../../utils/pixabayApi/pixabayApI';

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

  componentDidUpdate(prevProps, prevState) {
    const { userQuery, page, images, isModalShow } = this.state;

    if (prevState.userQuery !== userQuery || page !== prevState.page) this.request();

    if (images.length !== prevState.images.length) this.scrollToButton();

    isModalShow && window.addEventListener('keydown', this.closeModal);
    prevState.isModalShow && window.removeEventListener('keydown', this.closeModal);
  }

  searchFormSubmit = searchInput => {
    this.setState({ userQuery: searchInput, page: 1, images: [] });
  };

  scrollToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  request = async () => {
    const { userQuery, page } = this.state;

    await this.setState({ isLoading: true });

    pixabayApiRequest(userQuery, page)
      .then(({ data }) =>
        this.setState(({ images }) => {
          return { images: [...images, ...data.hits] };
        }),
      )
      .then(this.setState({ fetchError: null }))
      .catch(error => this.setState({ fetchError: error.messages }))
      .finally(this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
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

  closeModal = event => {
    if (event.code === 'Escape') this.setState({ isModalShow: false, image: {} });
  };

  render() {
    const { images, isLoading, isModalShow, image } = this.state;

    return (
      <div className="App">
        <Searchbar searchFormSubmit={this.searchFormSubmit} />

        {images.length > 0 && (
          <ImageGallery>
            {images.map(({ id, webformatURL, tags }) =>
              <ImageGalleryItem id={id} src={webformatURL} alt={tags} onClick={this.toggleModal} />
            )}
          </ImageGallery>
        )}

        {isLoading && <CustomLoader />}
        {images.length > 0 && !isLoading && <Button onClick={this.onLoadMore} />}

        {isModalShow && <Modal image={image} onClick={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
