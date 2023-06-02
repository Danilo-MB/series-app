import React from "react";
import { ActivityIndicator } from "react-native";
import { Wrapper } from "./styled";
import { COLORS } from "../../style/colors";


const Loading = () => {
  return (
    <Wrapper>
      <ActivityIndicator size="large" color={COLORS.white} />
    </Wrapper>
  );
};

export default Loading;