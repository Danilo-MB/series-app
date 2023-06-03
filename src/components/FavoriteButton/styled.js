import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
`;

export const ButtonText = styled(Text)`
  color: ${COLORS.white};
  font-size: 30px;
`;