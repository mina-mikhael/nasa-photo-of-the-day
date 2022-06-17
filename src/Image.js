import React from "react";
import styled from "styled-components";

// .nasaPhoto {
//   text-align: center;
//   margin: 3% 5%;
//   font-weight: 400;
//   font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
//   line-height: 1.4;
// }

// .nasaPhoto img {
//   max-width: 80%;
//   border-radius: 3em;
// }

const Div = styled.div`
  text-align: center;
  margin: 3% 5%;
  font-weight: 400;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  line-height: 1.4;
`;

const Img = styled.img`
  max-width: 85%;
  border-radius: 3em;
  margin-bottom: 1.5em;
`;

const Image = (props) => {
  const { imageUrl, imageInfo } = props;
  return (
    <Div>
      <Img src={imageUrl}></Img>
      <h3>{imageInfo}</h3>
    </Div>
  );
};

export default Image;
