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
  };

  onSubmit = (event, searchInput, formReset) => {
    event.preventDefault();
    this.setState({ userQuery: searchInput, page: 1, images: [] });
    formReset();
  };

  request = () => {
    const { userQuery, page } = this.state;

    this.setState({ isLoading: true });

    PixabayApiRequest(userQuery, page)
      .then(({ data }) =>
        this.setState(({ images }) => {
          return { images: [...images, ...data.hits], isLoading: false };
        }),
      );
  };

  LoadMore = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  toggleModal = (event) => {
    const { dataset: { name, id } } = event.target;
    const { images } = this.state;

    const image = images.find(image => Number.parseInt(id) === image.id);

    this.setState(({ isModalShow }) => {
      if (name === 'image') return { isModalShow: true, image: image }
      if (name === 'overlay') return { isModalShow: false, image: {} }
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { userQuery, page } = this.state;
    if (prevState.userQuery !== userQuery || prevState.page !== page) {
      this.request();
    }

    // if (document.querySelector('.Button') && prevState.images.length < this.state.images.length) {
    //   console.log('snapshot', snapshot);
    //   window.scrollTo({
    //     top: document.querySelector('.Button').scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }
  }

  componentDidMount() {
    const { userQuery } = this.state;
    this.request(userQuery);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(document.documentElement.scrollHeight);
    // console.log(document.querySelector('.Button'));

    // if (document.querySelector('.Button') && prevState.images.length < this.state.images.length) {

    //   console.log(document.documentElement.scrollHeight);
    //   console.log(document.querySelector('.Button'));

    //   return document.querySelector('.Button').scrollHeight;
    // }

    return null;
  }

  render() {
    const { images, isLoading, isModalShow, image } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery>
          {!!images.length && images.map(({ id, webformatURL, tags }) => ImageGalleryItem({ id, src: webformatURL, alt: tags, onClick: this.toggleModal, }))}
        </ImageGallery>

        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} className='Loader' />}
        {!!images.length && <Button onClick={this.LoadMore} />}

        {isModalShow && <Modal image={image} onClick={this.toggleModal} />}

      </div>
    );
  }
}

export default App;
