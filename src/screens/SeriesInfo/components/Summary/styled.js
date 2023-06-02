import styled from "styled-components/";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  padding: 10px;
  width: 100%;
`;

export const SummaryText = styled(Text)`
  color: ${COLORS.white};
  font-size: 18px;
`;

export const ReadMoreText = styled(Text)`
  color: ${COLORS.white};
  font-size: 18px;
  font-weight: bold;
`;