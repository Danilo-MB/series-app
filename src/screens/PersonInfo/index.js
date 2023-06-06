import React from "react";
import { Wrapper } from "./styled";
import ImageAndName from "./components/ImageAndName";


const PersonInfo = ({ route }) => {

  const { person } = route.params;

  return (
    <Wrapper>
      <ImageAndName 
        showName={person?.name}
        image={person?.image?.medium}
      />
    </Wrapper>
  )
};

export default PersonInfo;