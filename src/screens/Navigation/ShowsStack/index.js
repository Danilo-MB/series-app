import React from "react";
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ShowSearch from "../../ShowSearch";
import ShowInfo from "../../ShowInfo";
import EpisodeInfo from "../../EpisodeInfo";
import Favorites from "../../Favorites";

const Stack = createStackNavigator();

const ShowsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShowSearch"
        component={ShowSearch}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ShowInfo"
        component={ShowInfo}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EpisodeInfo"
        component={EpisodeInfo}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShowsStack;