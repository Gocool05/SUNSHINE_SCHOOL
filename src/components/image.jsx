import React from "react";

const Image = ({ title, imageUrl }) => {
  return (
    <div className="hover-bg">
      <a href={imageUrl} title={title} data-lightbox-gallery="gallery1">
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={imageUrl} className="img-responsive" alt={title} />
      </a>
    </div>
  );
};

export default Image;
