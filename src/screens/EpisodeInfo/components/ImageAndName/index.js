import React from "react";
import { Wrapper, StyledImage, EpisodeName } from "./styled";
import { DEFAULT_IMAGE } from "../../../../constants";


const ImageAndName = ({ episodeName, episodeNumber, image = DEFAULT_IMAGE }) => {
  return (
    <Wrapper>
      <StyledImage 
        source={{ uri: image }} 
      />
      <EpisodeName>{`Episode ${episodeNumber} - ${episodeName}`}</EpisodeName>
    </Wrapper>
  );
};

export default ImageAndName;