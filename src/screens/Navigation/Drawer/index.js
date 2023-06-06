import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../../../style/colors";
import CustomDrawerContent from "./CustomDrawer";
import ShowsStack from "../ShowsStack";
import PeopleStack from "../PeopleStack";
import FavoritesStack from "../FavoritesStack";


const Drawer = createDrawerNavigator();
const headerStyle = { backgroundColor: COLORS.green };

const NavigationDrawer = () => { 

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="ShowsStack" 
        component={ShowsStack}
        options={{
          headerTitle: "",
          headerShown: true,
          headerTintColor: COLORS.white,
          headerStyle: headerStyle,
        }}
      />
      <Drawer.Screen 
        name="PeopleStack" 
        component={PeopleStack}
        options={{
          headerTitle: "",
          headerShown: true,
          headerTintColor: COLORS.white,
          headerStyle: headerStyle,
        }}
      />
      <Drawer.Screen 
        name="FavoritesStack" 
        component={FavoritesStack}
        options={{
          headerTitle: "",
          headerShown: true,
          headerTintColor: COLORS.white,
          headerStyle: headerStyle,
        }}
      />
    </Drawer.Navigator>
  )
};

export default NavigationDrawer;