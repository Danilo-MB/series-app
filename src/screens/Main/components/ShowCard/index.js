import React, { memo, useContext } from "react";
import {
  MainWrapper,
  ShowName,
  ShowRate,
  ShowImage,
  ScoreAndFavWrapper,
} from "./styled";
import CardButton from "../CardButton";
import FavoriteButton from "../../../../components/FavoriteButton";
import { DEFAULT_IMAGE } from "../../../../constants";
import { FavoritesContext } from "../../../../context/favoritesContext";
import { useNavigation } from "@react-navigation/native";


const ShowCard = memo(({
  show,
  image = DEFAULT_IMAGE,
}) => {

  const navigation = useNavigation();
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = (item) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <MainWrapper>
      <CardButton
        text="View Info"
        onPress={() => navigation.navigate("SeriesInfo", { show })}
      />
      <ShowImage 
        source={{ uri: image }}
      />
      <ShowName>{show?.name}</ShowName>
      <ScoreAndFavWrapper>
        <ShowName>★</ShowName>
        <ShowRate>
          {show.rating.average ? show?.rating.average : " Not Rated"}
        </ShowRate>
        <FavoriteButton 
          isFavorite={isFavorite(show)}
          onPress={() => handleFavoriteToggle(show)}
        />
      </ScoreAndFavWrapper>
    </MainWrapper>
  )
});

export default ShowCard;
