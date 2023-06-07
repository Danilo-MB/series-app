import React from "react";
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PINValidation from "../../PINValidation";
import NavigationDrawer from "../Drawer";


const Stack = createStackNavigator();

const PINStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PINValidation"
          component={PINValidation}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="NavigationDrawer"
          component={NavigationDrawer}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PINStack;