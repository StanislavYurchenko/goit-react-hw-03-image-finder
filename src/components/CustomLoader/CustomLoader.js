import React from 'react';
import Loader from 'react-loader-spinner';
import './CustomLoader.css'

function CustomLoader() {
  return (
    <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} className="Loader" />
  )
}

export default CustomLoader