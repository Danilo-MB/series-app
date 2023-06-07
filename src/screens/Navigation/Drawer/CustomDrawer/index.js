import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { COLORS } from "../../../../style/colors";
import { useNavigation } from "@react-navigation/native";


const SECTIONS = [
  { label: "Shows", route: "ShowsStack"}, 
  { label: "People", route: "PeopleStack" },
  { label: "Favorites", route: "FavoritesStack" },
];

const CustomDrawerContent = () => {

  const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {SECTIONS.map((section, index) => ( 
        <TouchableHighlight
          key={index} onPress={() => navigation.navigate(section.route)}
          style={styles.link}
          underlayColor={COLORS.darkGreen}
        >
          <Text style={styles.linkText}>{section.label}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: COLORS.green,
  },
  link: {
    marginBottom: 16,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default CustomDrawerContent;