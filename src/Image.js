import React from "react";

const Image = (props) => {
  const { imageUrl, imageInfo } = props;
  return (
    <div className="nasaPhoto">
      <img src={imageUrl} />
      <h3>{imageInfo}</h3>
    </div>
  );
};

export default Image;
