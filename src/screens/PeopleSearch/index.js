import React from "react";
import { FlatList } from "react-native";
import { Wrapper } from "./styled";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import { useFetchPeople } from "../../utils/useFetchPeople";
import { useSearchPeople } from "../../utils/useSearchPeople";
import { COLORS } from "../../style/colors";
import PeopleCard from "./components/PeopleCard";
import LoadingMore from "../ShowSearch/components/LoadingMore";
import Error from "../../components/Error";



const NUM_COLUMNS = 2;

const PeopleSearch = () => {

  const { people, error, loading, loadingMore, loadMore } = useFetchPeople();
  const { setQuery, searchedPeople, searchError, loadingSearch } = useSearchPeople();

  const renderItem = ({ item }) => (
    <PeopleCard 
      person={item}
      image={item.image?.medium}
    />
  );

  if (!loadingMore && loading) return <Loading />;
  if (error || searchError) return <Error />;
  if (error) return <Error />;

  return (
    <Wrapper>
      <SearchInput
        onChangeText={(text) => setQuery(text)}
        placeholder="Search for people"
      />
      {loadingSearch ?
        <Loading
          position="relative"
          backgroundColor={COLORS.green}
        /> :
        <FlatList
          key={item => item.id}
          data={searchedPeople.length > 0 ? searchedPeople : people}
          renderItem={renderItem}
          onEndReached={!searchedPeople > 0 ? loadMore : null}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{ backgroundColor: COLORS.white }}
        />
      }
      {loadingMore && <LoadingMore />}
    </Wrapper>
  )
};

export default PeopleSearch;