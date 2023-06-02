import React from "react";
import { StyledInput } from "./styled";
import { COLORS } from "../../style/colors";


const SearchInput = ({ onChangeText }) => {
  return (
    <StyledInput 
      onChangeText={(text) => onChangeText(text)}
      placeholder="Search for a show..."
      placeholderTextColor={COLORS.gray}
    />
  )
};

export default SearchInput;
