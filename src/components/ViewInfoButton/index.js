import React from "react";
import { Wrapper, ButtonText } from "./styled";


const ViewInfoButton = ({ text, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Wrapper>
  )
};

export default ViewInfoButton;