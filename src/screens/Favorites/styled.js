import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS.black};
  padding-bottom: 20px;
`;

export const HeaderText = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
`;

export const FavoritesWrapper = styled(View)`
  width: 100%;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

`;