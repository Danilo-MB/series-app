import React from "react";
import { MainWrapper, ShowName, ShowImage } from "./styled";


const ShowCard = ({ showName, image }) => {
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