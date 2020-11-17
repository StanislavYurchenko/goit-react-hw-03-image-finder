import React from 'react';
import './ImageGallery.css'

function ImageGallery({ children }) {
  return (
    <ul className="ImageGallery">
      {children}
    </ul>
  )
}

export default ImageGallery;