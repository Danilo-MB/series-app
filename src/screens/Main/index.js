import React from "react";
import { FlatList } from "react-native";
import { Wrapper } from "./styled";
import ShowCard from "./components/ShowCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import SearchInput from "../../components/SearchInput";
import { COLORS } from "../../style/colors";
import { useFetchShows } from "../../utils/useFetchShows";
import { useSearchShows } from "../../utils/useSearchShows";


const  NUM_COLUMNS = 2;

const MainScreen = () => {

  const { shows, loading, error, loadMore } = useFetchShows();
  const { searchedShows, loadingSearch, searchError, setQuery } = useSearchShows();

  const renderItem = ({ item }) => (
    <ShowCard
      showName={searchedShows.length > 0 ? item.show.name : item.name}
      image={searchedShows.length > 0 ? item.show?.image?.medium : item.image?.medium}
    />
  );

  if (loading) return <Loading />;
  if (error || searchError) return <Error />;

  return (
    <Wrapper>
      <SearchInput
        onChangeText={(text) => setQuery(text)}
      />
      {loadingSearch ?
        <Loading
          position="relative"
          backgroundColor={COLORS.gray}
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