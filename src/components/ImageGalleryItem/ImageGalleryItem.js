import React from 'react';

function ImageGalleryItem({ id, src, alt, onClick }) {
  return (
    <li className="ImageGalleryItem" key={id} >
      <img src={src} alt={alt} onClick={onClick} className="ImageGalleryItem-image" data-id={id} data-name='image' />
    </li>
  );
}

export default ImageGalleryItem;
