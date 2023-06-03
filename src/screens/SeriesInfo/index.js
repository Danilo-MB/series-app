import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Wrapper } from "./styled";
import GoBackButton from "../../components/GoBackButton";
import ImageAndName from "./components/ImageAndName";
import DaysAndTime from "./components/DaysAndTime";
import Genres from "./components/Genres";
import Summary from "../../components/Summary";
import EpisodeList from "./components/EpisodeList";
import Loading from "../../components/Loading";
import { useFetchEpisodes } from "../../utils/useFetchEpisodes";


const SeriesInfo = ({ route, navigation }) => {

  const { show } = route.params;
  const { episodes, setShowId, loading } = useFetchEpisodes();

  useEffect(() => {
    if (show?.id) {
      setShowId(show.id);
    }
  }, []);
  console.log(episodes, "laa")
  return (
    <Wrapper>
      <ScrollView>
        <GoBackButton onPress={() => navigation.goBack()} />
        <ImageAndName 
          showName={show?.name}
          image={show?.image.medium}
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