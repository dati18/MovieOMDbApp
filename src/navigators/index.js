import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { MovieDetailScreen, MoviesScreen } from "../screens";
import { AppMaps } from "./AppMaps";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppMaps.Movies} component={MoviesScreen} />
        <Stack.Screen
          name={AppMaps.MovieDetail}
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
