import React from "react";
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import PeopleSearch from "../../PeopleSearch";
import PersonInfo from "../../PersonInfo";
import ShowInfo from "../../ShowInfo";
import EpisodeInfo from "../../EpisodeInfo";


const Stack = createStackNavigator();

const PeopleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PeopleSearch"
        component={PeopleSearch}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PersonInfo"
        component={PersonInfo}
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

export default PeopleStack;