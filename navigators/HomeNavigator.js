import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "../components/Atomics";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import SeriesScreen from "../screens/SeriesScreen";

const HomeStack = createStackNavigator();

function seriesScreenCustomHeader(props) {
  const { scene, previous, navigation } = props;
  console.log(scene);
  const { route } = scene;

  let seriesName = route.params.name || "Unnamed";
  let subtitleAboveName = route.params.isMainSeries
    ? "Chuỗi Radio"
    : "Chuỗi Số Phụ";
  return (
    <View style={seriesHeaderStyle.container}>
      <Text serif>{subtitleAboveName}</Text>
      <Text serif style={seriesHeaderStyle.title}>
        {seriesName}
      </Text>
    </View>
  );
}

const seriesHeaderStyle = StyleSheet.create({
  container: {
    height: 128,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Series"
        component={SeriesScreen}
        options={{
          header: seriesScreenCustomHeader,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
