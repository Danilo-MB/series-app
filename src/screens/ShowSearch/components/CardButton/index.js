import React from "react";
import { Wrapper, ButtonText } from "./styled";


const CardButton = ({ text, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Wrapper>
  )
};

export default CardButton;