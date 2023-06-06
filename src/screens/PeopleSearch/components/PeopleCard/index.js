import React, { memo } from "react";
import {
  Wrapper,
  PersonImage,
  PersonName,
} from "./styled";
import ViewInfoButton from "../../../../components/ViewInfoButton";
import { PERSON_DEFAULT_IMAGE } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";


const PeopleCard = memo(({ 
  person, 
  image = PERSON_DEFAULT_IMAGE,
}) => {

  const navigation = useNavigation();

  return (
    <Wrapper>
      <ViewInfoButton
        text="View Info"
        onPress={() => navigation.navigate("PersonInfo", { person })}
      />
      <PersonImage 
        source={{ uri: image }}
      />
      <PersonName>{person?.name}</PersonName>
    </Wrapper>
  )
});

export default PeopleCard;