import sytled from "styled-components";
import { View } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = sytled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-color: ${COLORS.black};
  align-items: center;
`;
