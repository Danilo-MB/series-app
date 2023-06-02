import sytled from "styled-components";
import { Text, Image } from "react-native";
import { COLORS } from "../../../../style/colors";


export const StyledImage = sytled(Image)`
  width: 40%;
  height: 40%;
`;

export const ShowName = sytled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: bold;
`;
