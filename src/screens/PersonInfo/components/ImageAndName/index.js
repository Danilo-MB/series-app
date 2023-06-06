import React from "react";
import { Wrapper, StyledImage, PersonName } from "./styled";
import { PERSON_DEFAULT_IMAGE } from "../../../../constants";
import GoBackButton from "../../../../components/GoBackButton";


const ImageAndName = ({ showName, image = PERSON_DEFAULT_IMAGE }) => {
  return (
    <Wrapper>
      <GoBackButton />
      <StyledImage 
        source={{ uri: image }} 
      />
      <PersonName>{showName}</PersonName>
    </Wrapper>
  );
  
};

export default ImageAndName;