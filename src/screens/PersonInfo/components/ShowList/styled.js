import styled from "styled-components/";
import { View, Text } from "react-native";
import { COLORS } from "../../../../style/colors";


export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10px;
`;

export const ShowsHeader = styled(Text)`
  color: ${COLORS.white};
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
`;

export const NoInformationAvailable = styled(Text)`
  color: ${COLORS.white};
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;