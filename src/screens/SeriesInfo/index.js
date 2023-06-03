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


const SeriesInfo = ({ route, navigation }) => {

  const { show } = route.params;
  const { episodes, setShowId, loading } = useFetchEpisodes();
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteToggle = (item) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  useEffect(() => {
    setShowId(show.id);
  }, []);

  console.log(episodes, "episodes")

  return (
    <Wrapper>
      <ScrollView>
        <GoBackButton onPress={() => navigation.goBack()} />
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
            onPress={(episode) => navigation.navigate("EpisodeInfo", { episode })}
          />
        }
      </ScrollView>
    </Wrapper>
  );
};

export default SeriesInfo;