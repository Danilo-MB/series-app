import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7%;
  background-color: ${COLORS.green};
  justify-content: space-around;
  align-items: center;
  padding-right: 10%;
  padding-left: 10%;
`;

export const ButtonWrapper = styled(TouchableHighlight)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-size: 15px;
  color: ${COLORS.white};
  text-align: center;
  font-weight: bold;
`;