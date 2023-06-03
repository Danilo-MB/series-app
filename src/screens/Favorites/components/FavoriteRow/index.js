import React from "react";
import { Wrapper, ShowName } from "./styled";
import FavoriteButton from "../../../../components/FavoriteButton";


const FavoriteRow = ({ showName, isFavorite, onPress }) => {
  return (
    <Wrapper>
      <ShowName>{showName}</ShowName>
      <FavoriteButton 
        isFavorite={isFavorite}
        onPress={onPress}
      />
    </Wrapper>
  )
};

export default FavoriteRow;