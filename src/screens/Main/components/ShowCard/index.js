import React from "react";
import {
  MainWrapper,
  ShowName,
  ShowImage,
  ScoreAndFavWrapper,
} from "./styled";
import CardButton from "../CardButton";
import FavoriteButton from "../../../../components/FavoriteButton";
import { DEFAULT_IMAGE } from "../../../../constants";


const ShowCard = ({ 
  showName,
  onPress,
  onPressFav,
  isFavorite,
  image = DEFAULT_IMAGE,
  showScore,
}) => {
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
      <ScoreAndFavWrapper>
        <ShowName>★</ShowName>
        <ShowName>{showScore}</ShowName>
        <FavoriteButton 
          isFavorite={isFavorite}
          onPress={onPressFav}
        />
      </ScoreAndFavWrapper>
    </MainWrapper>
  )
};

export default ShowCard;