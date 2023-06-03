import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${COLORS.black};
`;

export const FavoriteWrapper = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
`;

export const Favorite = styled(Text)`
  color: ${COLORS.white};
  font-size: 30px;
`;