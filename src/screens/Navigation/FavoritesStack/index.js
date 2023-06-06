import React from "react";
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Favorites from "../../Favorites";
import ShowInfo from "../../ShowInfo";
import EpisodeInfo from "../../EpisodeInfo";


const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
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
    </Stack.Navigator>
  );
};

export default FavoritesStack;