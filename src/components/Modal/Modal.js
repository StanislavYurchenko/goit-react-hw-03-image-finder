import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

function Modal({ image, onClick }) {

  return (
    <div className="Overlay" onClick={onClick} data-name='overlay'>
      <div className="Modal">
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  )
}

Modal.defaultProps = {
  image: {
    alt: 'photo'
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
}

export default Modal;