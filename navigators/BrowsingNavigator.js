import React from "react";
import { Text, View, Button } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import navigators, screens
import HomeNavigator from "./HomeNavigator";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "sans400" }}>Home!</Text>
      <Button
        title="Open player"
        onPress={() => navigation.navigate("Player")}
      />
    </View>
  );
}

function DownloadedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Downloaded!</Text>
    </View>
  );
}

const BrowsingTabs = createMaterialBottomTabNavigator();

function BrowsingNavigator() {
  return (
    <BrowsingTabs.Navigator
      labeled={false}
      barStyle={{ backgroundColor: "white", paddingVertical: 8 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-home";
          } else if (route.name === "Downloaded") {
            iconName = "md-download";
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <BrowsingTabs.Screen name="Home" component={HomeNavigator} />
      <BrowsingTabs.Screen name="Downloaded" component={DownloadedScreen} />
    </BrowsingTabs.Navigator>
  );
}

export default BrowsingNavigator;
