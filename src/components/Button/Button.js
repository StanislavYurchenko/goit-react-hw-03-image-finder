import React from 'react';

function Button({ onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;
