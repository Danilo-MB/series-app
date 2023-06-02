import styled from "styled-components";
import { Text, View } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.black};
`;