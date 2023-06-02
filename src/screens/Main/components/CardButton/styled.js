import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 25px;
  background-color: ${COLORS.transparentBlack};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${COLORS.transparentBlack};
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: ${COLORS.white};
  font-size: 15px;
  font-weight: bold;
`;