import React, { useContext } from "react";
import { ScrollView } from "react-native";
import {
  Wrapper,
  HeaderText,
  FavoritesWrapper,
} from "./styled";
import FavoriteRow from "./components/FavoriteRow";
import { FavoritesContext } from "../../context/favoritesContext";
import NoFavorites from "./components/NoFavorites";
import { useNavigation } from "@react-navigation/native";


const Favorites = () => {

  const navigation = useNavigation();
  const { isFavorite, removeFavorite, getSortedFavorites } = useContext(FavoritesContext);
  const sortedFavorites = getSortedFavorites();

  return (
    <Wrapper>
      <HeaderText>Favorites</HeaderText>
      <ScrollView>
        {sortedFavorites.length === 0 ?
          <NoFavorites /> :
          <FavoritesWrapper>
            {sortedFavorites.map((favorite) => (
              <FavoriteRow 
                key={favorite.id}
                showName={favorite.name} 
                isFavorite={isFavorite(favorite)}
                onPressFav={() => removeFavorite(favorite)}
                onPressShow={() => navigation.navigate("ShowInfo", { show: favorite })}
              />
            ))}
          </FavoritesWrapper>  
        }
      </ScrollView>
    </Wrapper>
  )

};

export default Favorites;