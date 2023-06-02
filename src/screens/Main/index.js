import React from "react";
import { FlatList } from "react-native";
import { Wrapper } from "./styled";
import ShowCard from "./components/ShowCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import SearchInput from "../../components/SearchInput";
import { COLORS } from "../../style/colors";
import { useFetchShows } from "../../utils/useFetchShows";


const  NUM_COLUMNS = 2;

const MainScreen = () => {

  const { shows, loading, error, loadMore } = useFetchShows();

  const renderItem = ({ item }) => (
    <ShowCard
      showName={item.name}
      image={item.image.medium}
    />
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Wrapper>
      <SearchInput
        onChangeText={() => {}}
      />
      <FlatList
        key={NUM_COLUMNS}
        data={shows}
        renderItem={renderItem}
        onEndReached={loadMore}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.gray }}
      />
    </Wrapper>
  )
};

export default MainScreen;