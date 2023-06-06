import styled from "styled-components";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  background-color: ${COLORS.green};
  margin-bottom: 10px;
  border-color: ${COLORS.white};
  border-width: 1px;
`;

export const PersonImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const PersonName = styled(Text)`
  color: ${COLORS.white};
  font-size: 20px;
`;