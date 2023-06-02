import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Days = styled(Text)`
  color: ${COLORS.white};
  font-size: 17px;
  margin-right: 10px;
`;

export const Time = styled(Text)`
  color: ${COLORS.white};
  font-size: 17px;
`;