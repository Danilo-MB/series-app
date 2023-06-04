import React  from "react";
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
import LoadingMore from "./components/LoadingMore";


const  NUM_COLUMNS = 2;

const MainScreen = ({ navigation }) => {

  const { shows, loading, loadingMore, setLoadingMore, error, loadMore } = useFetchShows();
  const { searchedShows, loadingSearch, searchError, setQuery } = useSearchShows();
  

  const renderItem = ({ item }) => (
    <ShowCard
      show={item}
      image={item.image?.medium}
    />
  );

  if (!loadingMore && loading) return <Loading />;
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
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{ backgroundColor: COLORS.white }}
        />
      }
      {loadingMore && <LoadingMore />}
    </Wrapper>
  )
};

export default MainScreen;