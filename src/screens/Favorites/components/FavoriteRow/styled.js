import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${COLORS.black};
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.white};
`;

export const ShowName = styled(Text)`
  color: ${COLORS.white};
  font-size: 18px;
`;
