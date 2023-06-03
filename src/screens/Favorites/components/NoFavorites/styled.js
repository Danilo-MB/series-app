import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${COLORS.black};
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Message = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
`;