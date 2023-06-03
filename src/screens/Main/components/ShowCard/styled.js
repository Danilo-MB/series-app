import styled from "styled-components";
import { Text, View, Image } from "react-native";
import { COLORS } from "../../../../style/colors";


export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  background-color: ${COLORS.green};
  margin-bottom: 10px;
`;

export const ShowName = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
  text-align: center;
`;

export const ShowImage = styled(Image)`
  width: 100%;
  height: 150px;
`;

export const ScoreAndFavWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;