import styled from "styled-components";
import { View } from "react-native";
import { COLORS } from "../../style/colors";


export const Wrapper = styled(View)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${COLORS.black};
  justify-content: center;
  alignItems: center;
  z-index: 1000;
`;