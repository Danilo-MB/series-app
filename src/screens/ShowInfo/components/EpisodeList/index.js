import React from "react";
import { View } from "react-native";
import { 
  Wrapper, 
  Header,
  Season,
} from "./styled";
import EpisodeRow from "../EpisodeRow";
import { useNavigation } from "@react-navigation/native";


const EpisodeList = ({ episodes, season = 1 }) => {

  const navigation = useNavigation();

  return (
    <Wrapper>
      <Header>Episodes</Header>
      <Season>{`Season ${season}`}</Season>
      {episodes?.map((episode) => (
        <View key={episode.id}>
        {episode.season !== season && (season = episode.season) &&
          <Season key={`Season-${episode.id}`}>{`Season ${season}`}</Season>}
          <EpisodeRow 
            key={episode.id}
            episodeName={episode.name}
            episodeNumber={episode.number}
            onPress={() => navigation.navigate("EpisodeInfo", { episode })}
          />
        </View>
      ))}
    </Wrapper>
  )
};

export default EpisodeList;