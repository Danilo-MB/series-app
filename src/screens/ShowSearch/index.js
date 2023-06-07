import React from "react";
import { FlatList } from "react-native";
import { Wrapper } from "./styled";
import ShowCard from "./components/ShowCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import LoadingMore from "./components/LoadingMore";
import SearchInput from "../../components/SearchInput";
import { COLORS } from "../../style/colors";
import { useFetchShows } from "../../utils/useFetchShows";
import { useSearchShows } from "../../utils/useSearchShows";


const  NUM_COLUMNS = 2;

const ShowSearch = () => {

  const { shows, loading, loadingMore, error, loadMore } = useFetchShows();
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
        placeholder="Search for a show"
        onChangeText={(text) => setQuery(text)}
      />
      {loadingSearch ?
        <Loading
          position="relative"
          backgroundColor={COLORS.green}
        /> :
        <FlatList
          key={item => item.id}
          data={searchedShows.length > 0 ? searchedShows : shows}
          renderItem={renderItem}
          onEndReached={!searchedShows.length > 0 ? loadMore : null}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{ backgroundColor: COLORS.white }}
        />
      }
      {loadingMore && <LoadingMore />}
    </Wrapper>
  )

};

export default ShowSearch;