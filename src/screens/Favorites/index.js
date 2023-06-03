import React, { useContext } from "react";
import { ScrollView } from "react-native";
import {
  Wrapper,
  Header,
  FavoritesWrapper,
} from "./styled";
import GoBackButton from "../../components/GoBackButton";
import FavoriteRow from "./components/FavoriteRow";
import { FavoritesContext } from "../../context/favoritesContext";
import NoFavorites from "./components/NoFavorites";


const Favorites = ({ navigation }) => {

  const { isFavorite, removeFavorite, getSortedFavorites } = useContext(FavoritesContext);
  const sortedFavorites = getSortedFavorites();

  return (
    <Wrapper>
      <GoBackButton onPress={() => navigation.goBack()} />
      <Header>Favorites</Header>
      <ScrollView>
        {sortedFavorites.length === 0 ?
          <NoFavorites /> :
          <FavoritesWrapper>
            {sortedFavorites.map((favorite) => (
              <FavoriteRow 
                key={favorite.id}
                showName={favorite.name} 
                isFavorite={isFavorite(favorite)}
                onPress={() => removeFavorite(favorite) }
              />
            ))}
          </FavoritesWrapper>  
        }
      </ScrollView>
    </Wrapper>
  )

};

export default Favorites;