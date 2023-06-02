import React from "react";
import { StyledImage, ShowName } from "./styled";
import { DEFAULT_IMAGE } from "../../../../constants";


const ImageAndName = ({ showName, image = DEFAULT_IMAGE }) => {
  return (
    <>
      <StyledImage 
        source={{ uri: image }} 
      />
      <ShowName>{showName}</ShowName>
    </>
  );
  
};

export default ImageAndName;