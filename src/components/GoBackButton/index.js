import React from "react";
import { Wrapper, ButtonText } from "./styled";


const GoBackButton = ({ onPress }) => {
  // TODO: add icon
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>Go Back</ButtonText>
    </Wrapper>
  )
};

export default GoBackButton;