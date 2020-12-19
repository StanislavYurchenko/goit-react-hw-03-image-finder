import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styles from './App.module.css';
import CustomLoader from '../CustomLoader/CustomLoader';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
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
    image: null,
  };

  componentDidMount() {
    const { userQuery } = this.state;
    this.request(userQuery);
  }

  componentDidUpdate(prevProps, prevState) {
    const { userQuery, page, images, image } = this.state;

    if (prevState.userQuery !== userQuery || page !== prevState.page)
      this.request();

    if (images.length !== prevState.images.length) this.scrollToButton();

    image && window.addEventListener('keydown', this.closeModal);
    prevState.image && window.removeEventListener('keydown', this.closeModal);
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

  request = () => {
    const { userQuery, page } = this.state;

    this.setState({ isLoading: true });

    pixabayApiRequest(userQuery, page)
      .then(newImages =>
        this.setState(({ images }) => {
          return { images: [...images, ...newImages] };
        }),
      )
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

    if (name === 'image') this.setState({ image: image });
    if (name === 'overlay') this.setState({ image: null });
  };

  closeModal = event => {
    if (event.code === 'Escape') this.setState({ image: null });
  };

  render() {
    const { images, isLoading, image } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar searchFormSubmit={this.searchFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        {isLoading && <CustomLoader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
        {images.length === 0 && !isLoading && <div>Nothing found</div>}
        {image && <Modal image={image} onClick={this.toggleModal} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
