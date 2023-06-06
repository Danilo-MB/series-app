import React from "react";
import { Wrapper, StyledImage, EpisodeName } from "./styled";
import { SHOW_DEFAULT_IMAGE } from "../../../../constants";


const ImageAndName = ({ episodeName, episodeNumber, image = SHOW_DEFAULT_IMAGE }) => {
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