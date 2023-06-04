import styled from "styled-components";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  padding: 10px;
`;

export const GenreWrapper = styled(View)`
  height: 40px;
  border-color: ${COLORS.gray};
  border-width: 2px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
`;

export const Genre = styled(Text)`
  color: ${COLORS.white};
  font-size: 15px;
`;