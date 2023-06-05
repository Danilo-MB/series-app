import React from "react";
import { Wrapper } from "./styled";
import GoBackButton from "../../components/GoBackButton";
import ImageAndName from "./components/ImageAndName";
import Season from "./components/Season";
import Summary from "../../components/Summary";
import { ScrollView } from "react-native";


const EpisodeInfo = ({ navigation, route }) => {

  const episode = route.params;

  return (
    <Wrapper>
      <GoBackButton onPress={() => navigation.goBack()} />
      <ImageAndName
        episodeName={episode.episode.name}
        episodeNumber={episode.episode.number}
        image={episode.episode.image?.medium}
      />
      <Season season={episode.episode.season} />
      <ScrollView>
        <Summary 
          summary={episode.episode.summary } 
          align="center"
        />
      </ScrollView>
    </Wrapper>
  )
};

export default EpisodeInfo;