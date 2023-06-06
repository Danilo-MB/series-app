import sytled from "styled-components";
import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = sytled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${COLORS.black};
  align-items: center;
`;

export const StyledScrollView = sytled(ScrollView)`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;