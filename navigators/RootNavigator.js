import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import PlayerScreen from "../screens/PlayerScreen";

// Import navigator
import BrowsingNavigator from "./BrowsingNavigator";

const RootStack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Browsing" component={BrowsingNavigator} />
        <RootStack.Screen name="Player" component={PlayerScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
