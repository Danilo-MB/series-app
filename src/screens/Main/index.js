import React, { useContext } from "react";
import { FlatList } from "react-native";
import { 
  Wrapper,
  FavoriteWrapper, 
  Favorite,
} from "./styled";
import ShowCard from "./components/ShowCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import SearchInput from "../../components/SearchInput";
import { COLORS } from "../../style/colors";
import { useFetchShows } from "../../utils/useFetchShows";
import { useSearchShows } from "../../utils/useSearchShows";
import { FavoritesContext } from "../../context/favoritesContext";


const  NUM_COLUMNS = 2;

const MainScreen = ({ navigation }) => {

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const { shows, loading, error, loadMore } = useFetchShows();
  const { searchedShows, loadingSearch, searchError, setQuery } = useSearchShows();
  
  const handleFavoriteToggle = (item) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  const renderItem = ({ item }) => (
    <ShowCard
      showName={item.name}
      image={item.image?.medium}
      showScore={item.rating?.average}
      onPress={() => navigation.navigate("SeriesInfo", { show: item })}
      onPressFav={() => handleFavoriteToggle(item)}
      isFavorite={isFavorite(item)}
    />
  );

  if (loading) return <Loading />;
  if (error || searchError) return <Error />;

  return (
    <Wrapper>
      <SearchInput
        onChangeText={(text) => setQuery(text)}
      />
      <FavoriteWrapper onPress={() => navigation.navigate("Favorites")}>
        <Favorite>♡</Favorite>
      </FavoriteWrapper>
      {loadingSearch ?
        <Loading
          position="relative"
          backgroundColor={COLORS.green}
        /> :
        <FlatList
          key={item => item.id}
          data={searchedShows.length > 0 ? searchedShows : shows}
          renderItem={renderItem}
          onEndReached={loadMore}
          keyExtractor={(item, index) => String(index)}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.gray }}
        />
      }
    </Wrapper>
  )
};

export default MainScreen;