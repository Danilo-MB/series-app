import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${COLORS.gunmetal};
`;

export const Message = styled(Text)`
  color: ${COLORS.white};
  font-size: 16px;
`;