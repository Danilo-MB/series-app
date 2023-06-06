import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

export const EpisodeName = styled(Text)`
  color: ${COLORS.white};
  font-size: 18px;
`;

export const ViewEpisode = styled(Text)`
  color: ${COLORS.white};
  font-size: 14px;
  font-weight: bold;
`;