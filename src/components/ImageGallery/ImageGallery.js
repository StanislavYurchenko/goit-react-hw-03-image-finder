import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, toggleModal }) {
  console.log('images', images);
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
