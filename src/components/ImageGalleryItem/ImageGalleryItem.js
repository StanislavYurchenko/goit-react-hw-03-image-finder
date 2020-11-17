import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css'

function ImageGalleryItem({ id, src, alt, onClick }) {

  return (
    <li className="ImageGalleryItem" key={id} >
      <img src={src} alt={alt} onClick={onClick} className="ImageGalleryItem-image" data-id={id} data-name='image' />
    </li>
  );
}
ImageGalleryItem.defaultProps = {
  alt: 'photo'
}


ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;
