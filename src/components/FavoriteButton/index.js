import React from "react";
import { Wrapper, ButtonText } from "./styled";


const FavoriteButton = ({ isFavorite, onPress }) => {
  return (
    <Wrapper 
      onPress={onPress}
      isFavorite={isFavorite}
    >
      <ButtonText isFavorite={isFavorite}>
        {isFavorite ? "★" : "☆"}
      </ButtonText>
    </Wrapper>
  )
};

export default FavoriteButton;