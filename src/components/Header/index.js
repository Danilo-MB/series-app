import React from "react";
import { Wrapper, ButtonWrapper, ButtonText } from "./styled";
import { COLORS } from "../../style/colors";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';


const SECTIONS = [
  { name: "Shows", route: "ShowSearch" },
  { name: "People", route: "PeopleSearch" },
  { name: "Fav Shows", route: "Favorites" },
]

const Header = () => {

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Wrapper>
      {SECTIONS.map((section) => (
      <ButtonWrapper
        key={section.name}
        underlayColor={COLORS.darkGreen}
        onPress={() => navigation.navigate(section.route)}
        disabled={route.name === section.route}
      >
        <ButtonText>{section.name}</ButtonText>
      </ButtonWrapper>))}
    </Wrapper>
  )
};

export default Header;