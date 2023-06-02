import styled from "styled-components";
import { TextInput } from "react-native";
import { COLORS } from "../../style/colors";


export const StyledInput = styled(TextInput)`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;