import React, { useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import { Wrapper } from "./styled";
import GoBackButton from "../../components/GoBackButton";
import FavoriteButton from "../../components/FavoriteButton";
import ImageAndName from "./components/ImageAndName";
import DaysAndTime from "./components/DaysAndTime";
import Genres from "./components/Genres";
import Summary from "../../components/Summary";
import EpisodeList from "./components/EpisodeList";
import Loading from "../../components/Loading";
import { useFetchEpisodes } from "../../utils/useFetchEpisodes";
import { FavoritesContext } from "../../context/favoritesContext";
import Error from "../../components/Error";
import { useNavigation } from "@react-navigation/native";


const ShowInfo = ({ route }) => {

  const { show } = route.params;
  const navigation = useNavigation();
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  const { episodes, loading, error } = useFetchEpisodes(show.id);
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = (item) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };
  
  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    });
    return () => {
      if (prevRoute.name !== "PersonInfo") {
        navigation.getParent()?.setOptions({
          headerShown: true,
        });
      }
    }
  }, [navigation]);

  if (error) return <Error />

  return (
    <Wrapper>
      <ScrollView>
        <GoBackButton/>
        <FavoriteButton 
          isFavorite={isFavorite(show)}
          onPress={() => handleFavoriteToggle(show)}
        />
        <ImageAndName 
          showName={show?.name}
          image={show?.image?.medium}
        />
        <DaysAndTime 
          days={show?.schedule?.days.join(", ")}
          time={show?.schedule?.time}
        />
        <Genres genres={show?.genres} />
        <Summary summary={show?.summary} />
        {loading ?  
          <Loading position="relative" /> :
          <EpisodeList 
            episodes={episodes}
          />
        }
      </ScrollView>
    </Wrapper>
  );
  
};

export default ShowInfo;