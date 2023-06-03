import React from "react";
import { Wrapper, StyledImage, ShowName } from "./styled";
import { DEFAULT_IMAGE } from "../../../../constants";


const ImageAndName = ({ showName, image = DEFAULT_IMAGE }) => {
  return (
    <Wrapper>
      <StyledImage 
        source={{ uri: image }} 
      />
      <ShowName>{showName}</ShowName>
    </Wrapper>
  );
  
};

export default ImageAndName;