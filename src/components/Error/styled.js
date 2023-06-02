import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS.black};
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
`;