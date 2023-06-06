import React from "react";
import { TouchableOpacity } from "react-native";
import { 
  Wrapper,
  EpisodeName,
  ViewEpisode,
} from "./styled";


const EpisodeRow = ({ episodeNumber, episodeName, onPress }) => {
  return (
    <Wrapper>
      <EpisodeName>{`${episodeNumber} - ${episodeName}`}</EpisodeName>
      <TouchableOpacity onPress={onPress}>
        <ViewEpisode>View Info</ViewEpisode>
      </TouchableOpacity>
    </Wrapper>
  )
};

export default EpisodeRow;