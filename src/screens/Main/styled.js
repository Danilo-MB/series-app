import styled from "styled-components";
import { View } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${COLORS.black};
`;