import React from "react";
import { TouchableOpacity } from "react-native";
import { 
  Wrapper,
  ShowName,
  ViewShow,
} from "./styled";


const ShowRow = ({ showName, onPress }) => {
  return (
    <Wrapper>
      <ShowName>{showName}</ShowName>
      <TouchableOpacity onPress={onPress}>
        <ViewShow>View more</ViewShow>
      </TouchableOpacity>
    </Wrapper>
  )
};

export default ShowRow;