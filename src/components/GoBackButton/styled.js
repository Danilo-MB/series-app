import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 2%;
  left: 3%;
  width: 20%;
  height: 25px;
  background-color: ${COLORS.transparentBlack};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${COLORS.gray};
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: ${COLORS.white};
  font-size: 15px;
`;