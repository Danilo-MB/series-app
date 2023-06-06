import React from "react";
import { StyledInput } from "./styled";
import { COLORS } from "../../style/colors";


const SearchInput = ({ onChangeText, placeholder }) => {
  return (
    <StyledInput 
      onChangeText={(text) => onChangeText(text)}
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray}
    />
  )
};

export default SearchInput;
