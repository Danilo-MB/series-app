import React from "react";
import { MainWrapper, ShowName, ShowImage } from "./styled";


const DEFAULT_IMAGE = "https://media.comicbook.com/files/img/default-movie.png";

const ShowCard = ({ showName, image = DEFAULT_IMAGE}) => {
  return (
    <MainWrapper>
      <ShowImage 
        source={{ uri: image }}
      />
      <ShowName>{showName}</ShowName>
    </MainWrapper>
  )
};

export default ShowCard;