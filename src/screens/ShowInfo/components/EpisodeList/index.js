import React from "react";
import { View } from "react-native";
import { 
  Wrapper, 
  Header,
  Season,
} from "./styled";
import EpisodeRow from "../EpisodeRow";


const EpisodeList = ({ episodes, season = 1, onPress }) => {
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
            onPress={() => onPress(episode)}
          />
        </View>
      ))}
    </Wrapper>
  )
};

export default EpisodeList;