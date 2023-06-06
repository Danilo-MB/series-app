import sytled from "styled-components";
import { Text, Image, View } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = sytled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledImage = sytled(Image)`
  width: 250px;
  height: 250px;
`;

export const ShowName = sytled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: bold;
`;
