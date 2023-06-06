import React from "react";
import { Wrapper, ButtonText } from "./styled";
import { useNavigation } from "@react-navigation/native";


const GoBackButton = ({ position = "absolute" }) => {
  // TODO: add icon

  const navigation = useNavigation();

  return (
    <Wrapper 
      position={position}
      onPress={() => navigation.goBack()}
    >
      <ButtonText>Go Back</ButtonText>
    </Wrapper>
  )
};

export default GoBackButton;