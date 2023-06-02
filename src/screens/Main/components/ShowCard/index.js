import React from "react";
import { MainWrapper, ShowName, ShowImage } from "./styled";
import CardButton from "../CardButton";
import { DEFAULT_IMAGE } from "../../../../constants";


const ShowCard = ({ showName, onPress, image = DEFAULT_IMAGE}) => {
  return (
    <MainWrapper>
      <CardButton
        text="View Info"
        onPress={onPress}
      />
      <ShowImage 
        source={{ uri: image }}
      />
      <ShowName>{showName}</ShowName>
    </MainWrapper>
  )
};

export default ShowCard;