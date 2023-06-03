import React from "react";
import { TouchableOpacity } from "react-native";
import { 
  Wrapper,
  ShowName,
  ShowDetailsText
} from "./styled";
import FavoriteButton from "../../../../components/FavoriteButton";


const FavoriteRow = ({ showName, isFavorite, onPressFav, onPressShow }) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={onPressShow}>
        <ShowName>{showName}</ShowName>
        <ShowDetailsText>Press for details</ShowDetailsText>
      </TouchableOpacity>
      <FavoriteButton 
        isFavorite={isFavorite}
        onPress={onPressFav}
      />
    </Wrapper>
  )
};

export default FavoriteRow;